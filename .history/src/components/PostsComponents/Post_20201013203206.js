import React from "react";

const Post = ({ title, description, comments, numberOfLikes }) => {
    return(
        <div className="singlePost">
            <div className="postHeader">
                <div className="postTitle">
                    {title}
                </div>
                <div className="postLikes">
                    {numberOfLikes}
                    <img className="likeImage" src={require("./images/likeButtonImage.png")} alt="likeImage" />
                </div>
            </div>
            <div className="postDescription">
                {description}
            </div>
            <div className="postCommentSection">
                <textarea name="newComment">
                  Add your comment here  
                </textarea>
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