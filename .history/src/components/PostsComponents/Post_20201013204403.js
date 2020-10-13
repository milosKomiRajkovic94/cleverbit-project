import React from "react";

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
                    <div className="singleComment">
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

export default Post;