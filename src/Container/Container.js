import React from "react";
import ReactDOM from "react-dom";
import ReactBlocklyComponent from "../BlockyComponent/block-index";
import ConfigFiles from "../initContent/content";
import parseWorkspaceXml from "../BlockyComponent/BlocklyHelper";
import "./blockyMessage";

class TestEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toolboxCategories: parseWorkspaceXml(ConfigFiles.INITIAL_TOOLBOX_XML)
    };
  }

  componentDidMount = () => {};

  workspaceDidChange = workspace => {
    const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    document.getElementById("generated-xml").innerText = newXml;
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById("code").value = code;
  };

  render = () => (
    <React.Fragment>
      <ReactBlocklyComponent.BlocklyEditor
        toolboxCategories={this.state.toolboxCategories}
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#ccc",
            snap: true
          }
        }}
        initialXml={ConfigFiles.INITIAL_XML}
        wrapperDivClassName="fill-height"
        workspaceDidChange={this.workspaceDidChange}
      />
      <div style={{ height: "600px", width: "800px" }} id="blockly" />
      <pre id="generated-xml" style={{ display: "none" }} />
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value=""
      />
    </React.Fragment>
  );
}

export default TestEditor;

// window.addEventListener("load", () => {
//   ReactDOM.render(<TestEditor />, document.getElementById("blockly"));
// });
