import React from 'react';
import spinner from '../../../assets/images/spinner.gif';
import './Loader.css';

const Loader = () => (
	<div className="mm-loader-container">
		<img className="mm-loader center" alt="" src={spinner} />
	</div>
);

export default Loader;