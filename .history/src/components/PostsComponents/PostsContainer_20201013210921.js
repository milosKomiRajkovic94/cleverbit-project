import React from "react";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { loadCurrentPosts } from "../../actions/postActions";

import Post from "./Post";

const PostsContainer = ({
    currentNumberOfLikes,
    currentNumberOfComments,
    currentPosts,
    loadCurrentPostsAction
}) => {

    return(
        <div> 
            <div className="postsHeader">
                <button className="reloadButton" onClick={() => loadCurrentPostsAction(false)}>
                    Reload
                </button>
                <div className="likesAndCommentsNumber">
                    <span className="likesNumber">
                        Likes: {currentNumberOfLikes}
                    </span>
                    <span className="commentsNumber">
                        Comments: {currentNumberOfComments}
                    </span>
                </div>
            </div>
            <div className="postsContainer">
                {currentPosts.map((singlePost) => {
                    return(
                        <>
                            <Post
                                key={"singlePost" + singlePost.id}
                                title={singlePost.title}
                                comments={singlePost.comments}
                                description={singlePost.description}
                                numberOfLikes={singlePost.numberOfLikes}
                                idOfPost={singlePost.id}
                                currentNumberOfLikes={currentNumberOfLikes}
                                currentPosts={currentPosts}
                            />
                            <hr key={"singlePostHr" + singlePost.id} className="singlePostHr" />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        currentNumberOfLikes: state.postReducer.currentNumberOfLikes, 
        currentNumberOfComments: state.postReducer.currentNumberOfComments,
        currentPosts: state.postReducer.currentPosts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadCurrentPostsAction: bindActionCreators(loadCurrentPosts, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PostsContainer);