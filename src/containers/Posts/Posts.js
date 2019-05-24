import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../store/actions';

import Post from '../../components/Posts/Post/Post';
import Loader from '../../components/UI/Loader/Loader';
import './Posts.css';

class Posts extends Component {
	componentDidMount() {
		this.props.onGetPosts();
	}

	render() {
		const { posts, loading } = this.props;

		return (
			<div className="mm-page-container">
				{loading ?
					<Loader /> :
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h1 className="mm-page-title">Posts</h1>
							</div>
						</div>
						<div className="row">
							{posts.map(post => <Post key={post.id} post={post} />)}
						</div>
					</div>
				}

			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts.posts,
		loading: state.posts.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onGetPosts: () => dispatch(getPosts())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);