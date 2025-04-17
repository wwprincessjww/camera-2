Blockly.Python['take_picture'] = function(block) {
  var filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC) || '"image.jpg"';
  var code = `
import cv2
camera = cv2.VideoCapture(0)
ret, frame = camera.read()
if ret:
    cv2.imwrite(${filename}, frame)
camera.release()
  `;
  return code;
};