import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer';
import Header from './Header';

/**
* @author
* @class Layout
**/

class Layout extends Component {
 state = {}
 render() {
  return(
        <React.Fragment>
            <Header></Header>
            {this.props.children}
            <Footer></Footer>
        </React.Fragment>
    )
   }
 }


Layout.propTypes = {}
export default Layout