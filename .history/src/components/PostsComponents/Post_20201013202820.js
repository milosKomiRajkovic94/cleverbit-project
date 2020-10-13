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
                    <img className="likeImage" src={require("./images/likeButtonImage.png")} />
                </div>
            </div>
        </div>
    )
}

export default Post;