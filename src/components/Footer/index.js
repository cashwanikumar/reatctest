import React, { PureComponent } from "react";

class Footer extends PureComponent {
  componentDidUpdate() {
    console.log("componentDidUpdate footer called");
  }
  render() {
    return <div>this is Footer</div>;
  }
}

class CopyRight extends PureComponent {
  render() {
    return <div>copyright Ashwani</div>;
  }
}

export {
  CopyRight
}
export default Footer;
