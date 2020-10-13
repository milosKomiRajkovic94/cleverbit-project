import React from "react";

import { connect } from "react-redux";

const PostsContainer = ({

}) => {
    return(
        <div> 

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        currentNumberOfLikes: state.postReducer.currentNumberOfLikes, 
        currentNumberOfComments: state.postReducer.currentNumberOfComments,
    }
}

export default connect(mapStateToProps) (PostsContainer);