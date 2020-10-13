import React, {useEffect, useState} from 'react';

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { loadCurrentPosts } from "./actions/postActions";

const App = ({ currentPosts, currentPostsAreLoading, currentPostsFailedLoading, loadCurrentPostsAction }) => {

  const [initialLoadingDone, setInitialLoadingDone] = useState(false);

  useEffect(() => {
    if(!initialLoadingDone){
      loadCurrentPostsAction(true);
      setInitialLoadingDone(true);
    }
  }, [initialLoadingDone, loadCurrentPostsAction])

  return (
    <div className="App">
       Hi, this is the new app!
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentPosts: state.postReducer.currentPosts,
    currentPostsAreLoading: state.postReducer.currentPostsAreLoading,
    currentPostsFailedLoading: state.postReducer.currentPostsFailedLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    loadCurrentPostsAction: bindActionCreators(loadCurrentPosts, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
