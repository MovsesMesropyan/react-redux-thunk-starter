import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostDetails } from '../../store/actions';

import Loader from '../../components/UI/Loader/Loader';
import './PostView.css';

class PostView extends Component {
	componentDidMount() {
		const { location: { pathname } } = this.props;
		const postId = pathname.split('/post/')[1];
		this.props.onGetPost(postId);
	}

	render() {
		const { post, loading } = this.props;

		return (
			<div className="mm-page-container">
				{loading ?
					<Loader /> :
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h1 className="mm-page-title">{post.id ? post.title : 'Page Not Found'}</h1>
							</div>
						</div>
						{post.id ?
							<div className="row">
								<div className="col-lg-12">
									<p>{post.body}</p>
								</div>
							</div> :
							null
						}
					</div>
				}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		post: state.posts.postDetails,
		loading: state.posts.postDetailsIsLoading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onGetPost: id => dispatch(getPostDetails(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostView);