import { CURRENT_POSTS_LOADED_SUCCESSFULLY, CURRENT_POSTS_ARE_LOADING, CURRENT_POSTS_FAILED_LOADING } from "./actionTypes";

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

export function currentPostsLoadedSuccessfully(currentPosts){
    return{
        type: CURRENT_POSTS_LOADED_SUCCESSFULLY,
        currentPosts
    }
}

export function loadCurrentPosts(){
    return(dispatch) => {
        dispatch(currentPostsAreLoadingAction())
    }
}