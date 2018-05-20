import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions'

class PostsShow extends Component {
    componentDidMount() {
        // params object contains all the parmas in the url in the url, we focus on id param
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        const { post } = this.props;

        //first render it's undefined, to avoid that we add this trick
        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>

                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }

}

function mapStateToProps({ posts }, ownProps) {
    // props for this component
    // this.props === ownProps
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
