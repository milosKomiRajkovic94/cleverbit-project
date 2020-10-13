import React, {useEffect, useState, lazy, Suspense} from 'react';

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { loadCurrentPosts } from "./actions/postActions";

import {
  useHistory,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import Header from "./components/HeaderComponents/Header";

import PostsContainer from "./components/PostsComponents/PostsContainer";

import { POSTS, COMMENTS, HOME } from "./constants/urls";

import Loader from "./utils/Loader";

const App = ({ currentPosts, currentPostsAreLoading, currentPostsFailedLoading, loadCurrentPostsAction }) => {

  const [initialLoadingDone, setInitialLoadingDone] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if(!initialLoadingDone){
      loadCurrentPostsAction(true);
      setInitialLoadingDone(true);
    }
  }, [initialLoadingDone, loadCurrentPostsAction])

  function changeLocation(locationToGo) {
    history.push(locationToGo);
  }

  function waitingComponent(Component) {
    return (props) => (
      <Suspense
        fallback={<Loader classNameOfWrapper="centered" text={"Loading"} />}
      >
        <Component {...props} />
      </Suspense>
    );
  }

  return (
    <div className="App">
       <Header />
       <Switch>
        <Route exact path={HOME} component={PostsContainer} />
        <Route
          exact
          path={POSTS}
          component={waitingComponent(
            lazy(() =>
              import("./components/PostsComponents/PostsContainer")
            )
          )}
        />
        <Route
          exact
          path={COMMENTS}
          component={waitingComponent(
            lazy(() =>
              import("./components/CommentsComponents/CommentsContainer")
            )
          )}
        />
      </Switch>
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
