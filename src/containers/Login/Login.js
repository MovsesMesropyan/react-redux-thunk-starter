import React, { useState } from 'react';

import useForm from 'react-hook-form';
import { connect } from 'react-redux';
import { login } from '../../store/actions';
import './Login.css';

const Login = ({ user, loading, onLogin }) => {
	const [isEmailPristine, updateEmail] = useState(true);
	const [isPasswordPristine, updatePassword] = useState(true);
	const { register, handleSubmit, errors } = useForm({ mode: "onChange" });

	const buttonDisabled = loading || isEmailPristine || isPasswordPristine || errors.email || errors.password;

	const onSubmit = data => {
		onLogin(data);
	};

	return (
		<div className="mm-page-container mm-login-form-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h1 className="mm-page-title">Login</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="form-group">
							<label htmlFor="email">E-mail</label>
							<input type="email"
								   id="email"
								   name="email"
								   placeholder="E-mail"
								   className={'form-control ' + (errors.email ? 'form-control-error' : '')}
								   onBlur={() => updateEmail(false)}
								   ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
							{
								!isEmailPristine && errors.email ?
									<div className="form-control-message-container">
										{ errors.email.type === 'required' && <p>E-mail is required.</p> }
										{ errors.email.type === 'pattern' && <p>E-mail not match.</p> }
									</div> :
									null
							}
						</div>
					</div>
					<div className="col-lg-12">
						<div className="form-group">
							<label htmlFor="email">Password</label>
							<input  type="password"
									id="password"
									name="password"
									placeholder="Password"
									className={'form-control ' + (errors.password ? 'form-control-error' : '')}
									onBlur={() => updatePassword(false)}
									ref={register({ required: true, validate: { minLength: value => value.length >= 6 } })} />
							{
								!isPasswordPristine && errors.password ?
									<div className="form-control-message-container">
										{ errors.password.type === 'required' && <p>Password is required.</p> }
										{ errors.password.type === 'minLength' && <p>Must be minimum 6 characters.</p> }
									</div> :
									null
							}
						</div>
					</div>
					<div className="col-lg-12">
						<button className={'btn pull-right ' + (buttonDisabled ? 'btn-default' : 'btn-primary')}
								disabled={buttonDisabled}
								onClick={handleSubmit(onSubmit)}>Login</button>
					</div>
				</div>
			</div>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		user: state.auth.user,
		loading: state.auth.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLogin: user => dispatch(login(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);