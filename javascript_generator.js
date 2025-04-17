Blockly.JavaScript['take_picture'] = function(block) {
  var filename = Blockly.JavaScript.valueToCode(block, 'FILENAME', Blockly.JavaScript.ORDER_ATOMIC) || "'picture.png'";

  var code = `
    (async function() {
      try {
        const video = document.createElement('video');
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        video.srcObject = stream;
        await video.play();

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = ${filename};
        link.click();

        stream.getTracks().forEach(track => track.stop());
      } catch (error) {
        console.error('Error accessing the camera or saving the image:', error);
        alert('Failed to take picture. Please ensure camera access is allowed.');
      }
    })();
  `;
  return code;
};
