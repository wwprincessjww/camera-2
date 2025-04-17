Blockly.Blocks['take_picture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Take Picture");
    this.appendValueInput("FILENAME")
        .setCheck("String")
        .appendField("Save as");
    this.setColour(160);
    this.setTooltip("Takes a picture using a USB camera and saves it with the specified filename.");
    this.setHelpUrl("");
  }
};