import { CURRENT_POSTS_LOADED_SUCCESSFULLY, CURRENT_POSTS_ARE_LOADING, CURRENT_POSTS_FAILED_LOADING, CURRENT_POSTS_LOADED_SUCCESSFULLY_AFTER_INITIAL_LOAD } from "../actions/actionTypes";

import initialState from "../initialState";


export function postReducer(
    state = initialState.postsReducerState,
    action 
) {
    switch(action.type){
        case CURRENT_POSTS_LOADED_SUCCESSFULLY: {
            return{
                ...state,
                currentPosts: action.currentPosts,
                currentPostsAreLoading: false,
                currentPostsFailedLoading: false,
            };
        }

        case CURRENT_POSTS_ARE_LOADING: {
            return{
                ...state,
                //When using the real API endpoint just replace this with empty array []
                currentPosts: state.currentPosts,
                currentPostsAreLoading: action.currentPostsAreLoading,
                currentPostsFailedLoading: false,
            };
        }

        case CURRENT_POSTS_FAILED_LOADING: {
            return {
                ...state,
                //When using the real API endpoint just replace this with empty array []
                currentPosts: state.currentPosts,
                currentPostsAreLoading: false,
                currentPostsFailedLoading: action.currentPostsFailedLoading,
            }
        }
    }
}

