import React from "react";

import { connect } from "react-redux";

import Post from "./Post";

const PostsContainer = ({
    currentNumberOfLikes,
    currentNumberOfComments,
    currentPosts
}) => {
    return(
        <div> 
            <div className="postsHeader">
                <button className="reloadButton">
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

export default connect(mapStateToProps) (PostsContainer);