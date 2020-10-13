import React from "react";

import { connect } from "react-redux";

const PostsContainer = () => {
    return(
        <div> 

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        currentNumberOfLikes: state.postReducer, 
        currentNumberOfComments: state.postReducer,
    }
}

export default PostsContainer;