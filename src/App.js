import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import { updateUser, logout } from './store/actions';
import utils from './services/utils';
import Navigation from './components/Navigation/Navigation';
import Posts from './containers/Posts/Posts';
import PostView from './containers/PostView/PostView';
import Login from './containers/Login/Login';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';

const App = ({ user, onUpdateUser, onLogout }) => {
	const userData = utils.getDataFromStorage('RRTS_USER_DATA');

	if(userData && userData.email && !user.email) {
		onUpdateUser(userData);
	}

	return (
	  <div className="mm-main-wrapper">
		<div className="mm-main-container">
		  {user.email ?
			<React.Fragment>
			  <Navigation onLogout={onLogout} />
			  <Switch>
				<Route exact path="/" component={Posts} />
				<Route exact path="/post/:id" component={PostView} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contacts" component={Contacts} />
				<Redirect to="/" />
			  </Switch>
			</React.Fragment> :
			<Switch>
			  <Route exact path="/login" component={Login} />
			  <Redirect to="/login" />
			</Switch>
		  }
		</div>
	  </div>
	);
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
	return {
		onUpdateUser: user => dispatch(updateUser(user)),
		onLogout: user => dispatch(logout())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
