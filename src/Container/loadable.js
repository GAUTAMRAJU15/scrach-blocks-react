import React from "react";
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./Container"),
  loading() {
    return <div>Loading...</div>;
  }
});

export default class DraggerLazyLoad extends React.Component {
  render() {
    console.log("inside draggerlazyload");
    return <LoadableComponent />;
  }
}
