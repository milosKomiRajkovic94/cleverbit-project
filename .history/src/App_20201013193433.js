import React from 'react';

import { connect } from "react-redux";

const App = () => {
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

export default App;
