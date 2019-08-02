import React from "react";
import ReactDOM from "react-dom";
import ReactBlocklyComponent from "../BlockyComponent/block-index";
import ConfigFiles from "../initContent/content";
import parseWorkspaceXml from "../BlockyComponent/BlocklyHelper";
import blocks from "../Blocks/aiBlocks";
import Generators from "../Generators/aiGenerate";
import "./blockyMessage";
import "./styles.scss";

class TestEditor extends React.Component {
  constructor(props) {
    console.log("hello");
    super(props);
    this.state = {
      toolboxCategories: parseWorkspaceXml(ConfigFiles.INITIAL_TOOLBOX_XML)
    };
  }
  componentWillMount() {
    blocks();
    Generators();
  }

  componentDidMount() {
    console.log("test editor mounted");
  }
  workspaceDidChange = workspace => {
    const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    document.getElementById("generated-xml").innerText = newXml;
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById("code").value = code;
  };

  render() {
    console.log("inside render");
    return (
      <React.Fragment>
        <ReactBlocklyComponent.BlocklyEditor
          toolboxCategories={this.state.toolboxCategories}
          workspaceConfiguration={{
            grid: {
              spacing: 20,
              length: 3,
              colour: "#ccc",
              snap: true
            },
            zoom: {
              controls: true,
              wheel: true,
              startScale: 1.0,
              maxScale: 3,
              minScale: 0.3,
              scaleSpeed: 1.2
            }
          }}
          initialXml={ConfigFiles.INITIAL_XML}
          wrapperDivClassName="fill-height"
          workspaceDidChange={this.workspaceDidChange}
        />
        <div className="codeblocks">
          <div style={{ height: "600px", width: "800px" }} id="blockly" />
          <div className="code-area">
            <textarea id="code" style={{ height: "200px", width: "400px" }} />
            <pre id="generated-xml" style={{ display: "none" }} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TestEditor;
