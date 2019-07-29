import React from "react";
import DraggerLoadable from "./loadable";

class BlockEditor extends React.Component {
  componentWillMount() {
    if (!window.Blockly) {
      this.loadBlockly()
        .then(() => {
          this.setState({
            blocklyLoaded: true
          });
        })
        .catch(err => {
          this.setState({
            blocklyLoaded: true
          });
        });
    }
    // clearInterval(id);
  }

  loadBlockly = async () => {
    //    check if its already there don't add the script
    const script = document.createElement("script");
    script.src =
      "https://blockly-demo.appspot.com/static/blockly_compressed.js";
    document.head.appendChild(script);
    return new Promise((resolve, reject) => {
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", () => {
        reject();
      });
    });
  };

  state = {
    blocklyLoaded: window.Blockly ? true : false
  };

  render() {
    console.log("phaser loaded", this.state.blocklyLoaded, window.Blockly);
    return (
      <React.Fragment>
        {this.state.blocklyLoaded && <DraggerLoadable />}
      </React.Fragment>
    );
  }
}

export default BlockEditor;
