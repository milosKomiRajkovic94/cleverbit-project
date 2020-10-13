import React, {useEffect, useState} from 'react';

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { loadCurrentPosts } from "./actions/postActions";

import {
  useHistory,
  Route,
  Switch,
  withRouter,
  useLocation,
} from "react-router-dom";

const App = ({ currentPosts, currentPostsAreLoading, currentPostsFailedLoading, loadCurrentPostsAction }) => {

  const [initialLoadingDone, setInitialLoadingDone] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if(!initialLoadingDone){
      loadCurrentPostsAction(true);
      setInitialLoadingDone(true);
    }
  }, [initialLoadingDone, loadCurrentPostsAction])

  function changeLocation(locationToGo) {
    history.push(locationToGo);
  }

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App));
