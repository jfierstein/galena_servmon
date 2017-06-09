'use strict';

import { Button, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';

import AboutModal from 'components/modals/AboutModal'
import { hashHistory } from 'react-router';

function mapStoreStateToProps(store) {
  return {

  }
}

class Header extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      showAboutModal : false
    };
  }

  componentWillMount() {
    //this.props.dispatch(getAuthStatus());
  }

  homeClicked = () => {
    hashHistory.push('/');
  }

  aboutClicked = () => {
    this.setState({
      ...this.state,
      showAboutModal: true
    });
  }

  closeAboutModal = () => {
     this.setState({
      ...this.state,
      showAboutModal: false
    });
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Galena ServMon</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              { this.state.showAboutModal  ? <AboutModal show={this.state.showAboutModal}  close={this.closeAboutModal} /> : null }              
              <NavItem onClick={this.aboutClicked}><i style={{ marginRight : 5}} className="fa fa-info-circle" />About</NavItem>                           
            </Nav>
            <Nav>
              <NavItem onClick={this.homeClicked}>Home</NavItem>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default connect(mapStoreStateToProps)(Header);