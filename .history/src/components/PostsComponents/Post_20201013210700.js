import React from "react";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { increaseNumberOfLikesForAPost } from "../../actions/postActions";

const Post = ({ title, description, comments, numberOfLikes }) => {
    return(
        <div className="singlePost">
            <div className="postHeader">
                <div className="postTitle">
                    {title}
                </div>
                <div className="postLikes">
                    <span className="concreteNumberOfLikes">
                        {numberOfLikes}
                    </span>
                    <img className="likeImage" src={require("./images/likeButtonImage.png")} alt="likeImage" />
                </div>
            </div>
            <div className="postDescription">
                {description}
            </div>
            <div className="postCommentSection">
                <textarea name="newComment" defaultValue={"Add your comment here"} />
            </div>
            {comments.map((comment) => {
                return(
                    <div key={"singleComment" + comment.id} className="singleComment">
                        <span className="singleCommentText">
                            {comment.text}
                        </span>
                        <span className="singleCommentDate">
                            {comment.date}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        increaseNumberOfLikesForAPost: bindActionCreators(increaseNumberOfLikesForAPost, dispatch)
    }
}

export default connect(mapDispatchToProps)(Post);