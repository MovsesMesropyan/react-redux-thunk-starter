import React from 'react';
import { Link } from 'react-router-dom';

import './Post.css';

const Post = ({post}) => {
	return (
		<Link to={'/post/' + post.id}  className="mm-single-post card col-sm-4">
			<div className="card-body">
				<h3 className="card-title mm-ellipsis">{post.title}</h3>
				<p className="card-text">{post.body}</p>
			</div>
		</Link>
	);
};

export default Post;