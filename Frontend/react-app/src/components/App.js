import React, {Component} from 'react';
import {connect} from "react-redux";
import {getUsers, getTop} from "../redux/actions/users";

import {Users} from "./User";
import {Spinner} from './Spinner';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentWillMount() {
    this.props.getUsers();
    this.props.getTop();
  }

  show = () => {
    this.setState({show:!this.state.show});
  }

  renderContent = () => {;

    const {users,userTop} = this.props;
    const backgroundColor = this.state.show?"#f85e6a":"#999";
    return  <div>
    <h1 className="demo-title">Users List</h1>
        <Users users={users} topUser={userTop.id} show={this.state.show}/>
            <center>
              <div className="back">
                <a onClick={this.show} href="#"
                  style={{backgroundColor}}
                  className="button">The highest Paid
                </a>
              </div>
            </center>
  </div>
  };

  render() {
    const {users, pending, userTop} = this.props;

    return (
      <div className="container app-wrapper">
          {users && userTop && !pending && this.renderContent()}
          {pending && <Spinner/>}      
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.usersList,
  pending: state.ui.pending,
  userTop: state.users.userTop,
});

export default connect(mapStateToProps, {getUsers, getTop})(App);
