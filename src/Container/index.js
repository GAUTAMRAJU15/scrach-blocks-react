import React from "react";
import DraggerLoadable from "./loadable";

class BlockEditor extends React.Component {
  componentWillMount() {
    if (!window.Blockly) {
      this.loadBlockly();
    }
  }

  loadBlockly = async () => {
    //    check if its already there don't add the script
    let value = await this.loadScript(
      "https://blockly-demo.appspot.com/static/blockly_compressed.js"
    );
    let value1 = await this.loadScript(
      "https://blockly-demo.appspot.com/static/blocks_compressed.js"
    );
    let value2 = await this.loadScript(
      "https://blockly-demo.appspot.com/static/msg/js/en.js"
    );
    let value3 = await this.loadScript(
      "https://blockly-demo.appspot.com/static/javascript_compressed.js"
    );

    Promise.all([value, value1, value2, value3])
      .then(function(values) {
        this.setState({
          blocklyLoaded: true
        });
      })
      .catch(err => {
        this.setState({
          blocklyLoaded: true
        });
      });
  };

  loadScript = async scripts => {
    const script = document.createElement("script");
    script.src = scripts;
    script.async = true;
    document.head.appendChild(script);
    return new Promise((resolve, reject) => {
      script.addEventListener("load", () => {
        resolve("loaded");
      });
      script.addEventListener("error", () => {
        console.log("reject");
        reject();
      });
    });
  };

  state = {
    blocklyLoaded: window.Blockly ? true : false
  };

  componentDidMount() {
    console.log(
      "test editor from lazzy load mounted",
      this.state.blocklyLoaded
    );
  }
  render() {
    console.log("blockly loaded", this.state.blocklyLoaded, window.Blockly);
    return (
      <React.Fragment>
        {this.state.blocklyLoaded && <DraggerLoadable />}
      </React.Fragment>
    );
  }
}

export default BlockEditor;
