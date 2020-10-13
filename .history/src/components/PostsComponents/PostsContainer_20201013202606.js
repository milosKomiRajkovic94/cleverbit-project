import React from "react";

import { connect } from "react-redux";

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