import React, { PureComponent } from "react";
import Footer, { CopyRight as MyName } from "../Footer";
import EachUser from "./EachUser";

class Dashboard extends PureComponent {
  state = {
    userList: [
      {
        id: 1,
        name: "ashwani",
        email: "ashwani@gmail.com",
      },
    ],
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        userList: [
          {
            id: 1,
            name: "ashwani",
            email: "ashwani1@gmail.com",
          },
          {
            id: 2,
            name: "ashwani2",
            email: "ashwani2@gmail.com",
          },
          {
            id: 3,
            name: "ashwani3",
            email: "ashwan3i@gmail.com",
          },
          {
            id: 4,
            name: "ashwani4",
            email: "ashwani4@gmail.com",
          },
        ],
      });
    }, 4000);
  }

  render() {
    const { userList } = this.state;
    const { children } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((data) => (
              <EachUser id={data.id} name={data.name} email={data.email} />
            ))}
          </tbody>
        </table>
        <br />
        <br />
        {children}
        <br />
        <br />
        <Footer />
        <br />
        <MyName />
      </div>
    );
  }
}

export default Dashboard;
