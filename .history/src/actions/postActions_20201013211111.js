import { CURRENT_POSTS_LOADED_SUCCESSFULLY, CURRENT_POSTS_ARE_LOADING, CURRENT_POSTS_FAILED_LOADING, CURRENT_POSTS_LOADED_SUCCESSFULLY_AFTER_INITIAL_LOAD, INCREASE_NUMBER_OF_LIKES_FOR_A_POST } from "./actionTypes";

import  fakeData from "../constants/fakeData";

export function currentPostsAreLoadingAction(currentPostsAreLoading){
    return{
        type: CURRENT_POSTS_ARE_LOADING,
        currentPostsAreLoading
    }
}

export function currentPostsFailedLoadingAction(currentPostsFailedLoading){
    return{
        type: CURRENT_POSTS_FAILED_LOADING,
        currentPostsFailedLoading
    }
}

export function currentPostsLoadedSuccessfullyAction(currentPosts){
    return{
        type: CURRENT_POSTS_LOADED_SUCCESSFULLY,
        currentPosts
    }
}

/* This is just an action for remaining the current state in order not to have restarted data, but instead updated current data after click on RELOAD BUTTON.
    Delete this action after implementation of API endpoint and use just currentPostsLoadedSuccessfullyAction in order to send current data from the endpoint.
*/
export function currentPostsLoadedSuccessfullyAfterInitialLoad(){
    return{
        type: CURRENT_POSTS_LOADED_SUCCESSFULLY_AFTER_INITIAL_LOAD,
    }
}


export function loadCurrentPosts(initialLoad){
    return(dispatch) => {
        dispatch(currentPostsAreLoadingAction(true));
        /* I will pass direct fake JSON data here and you can implement your actual API end point request here. 
        setTimeout will be used as imitation that it takes some time for the request to reach endpoint. */
        setTimeout(function(){
            if(initialLoad){
                dispatch(currentPostsLoadedSuccessfullyAction(fakeData));
            }else {
                dispatch(currentPostsLoadedSuccessfullyAfterInitialLoad());
            }
        }, 1500)

    }
}

export function numberOfLikesForAPostIncrease(currentPosts, currentNumberOfLikes){
    return{
        type: INCREASE_NUMBER_OF_LIKES_FOR_A_POST,

    }
}

export function increaseNumberOfLikesForAPost(id, currentPosts, currentNumberOfLikes){
    return(dispatch) => {
        dispatch(currentPostsAreLoadingAction(true));

        let index = currentPosts.findIndex(o => o.id = id),
            concretePost = currentPosts[index];
        
        concretePost.numberOfLikes += 1;

        currentPosts[index] = concretePost;

        currentNumberOfLikes += 1;

        dispatch(numberOfLikesForAPostIncrease(currentPosts, currentNumberOfLikes));
    }
}