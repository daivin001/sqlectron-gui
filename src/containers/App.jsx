import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DialogActions from '../actions/dialog';
import ValidatedComponent from 'utils/ValidatedComponent.jsx'


class AppContainer extends ValidatedComponent {
  static propTypes = {
    dialog: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    routeParams: PropTypes.object.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }),
    params: PropTypes.shape({
      userLogin: PropTypes.string,
      repoName: PropTypes.string
    }).isRequired,
    children: PropTypes.node
  }

  static contextTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { dialog, dispatch, children } = this.props;
    const actions = bindActionCreators(DialogActions, dispatch);

    return (
      <div>
        <ul>
          <li><Link to="/">Connections</Link></li>
          <li><Link to="/databases">Databases</Link></li>
        </ul>
        {/*<App dialog={dialog} actions={actions} />*/}
        {children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dialog: state.dialog
  };
}

export default connect(mapStateToProps)(AppContainer);
