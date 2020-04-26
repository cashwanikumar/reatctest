import React, { PureComponent } from "react";

import "./index.css";

class Theme extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="main-body">
        <div className="header">
            <button>My Logo</button>
        </div>
        {children}
        <div className="footer">Copyright Ashwani</div>
      </div>
    );
  }
}

export default Theme;
