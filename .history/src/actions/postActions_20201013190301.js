import { GET_CURRENT_POSTS, CURRENT_POSTS_ARE_LOADING, CURRENT_POSTS_FAILED_LOADING } from "./actionTypes";

export function currentPostsAreLoadingAction(currentPostsAreLoading){
    return{
        type: CURRENT_POSTS_ARE_LOADING,
        currentPostsAreLoading
    }
}