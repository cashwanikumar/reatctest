import React, { PureComponent } from "react";

const EachUser = ({id, name, email}) => {
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{email}</td>
      </tr>
    );
}

export default EachUser;
