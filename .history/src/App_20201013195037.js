import React, {useEffect, useState, lazy, Suspense} from 'react';

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

import Header from "./components/HeaderComponents/Header";

import { POSTS, COMMENTS } from "./constants/urls";

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

  function waitingComponent(Component) {
    return (props) => (
      <Suspense
        fallback={<Loader classNameOfWrapper="centered" text={t("loading")} />}
      >
        <Component {...props} />
      </Suspense>
    );
  }

  return (
    <div className="App">
       <Header />
       <Switch>
        <Route exact path={HOME} component={TopNewsContainer} />
        <Route
          exact
          path={TOP_NEWS}
          component={waitingComponent(
            lazy(() =>
              import("./components/TopNewsComponents/TopNewsContainer")
            )
          )}
        />
        <Route
          exact
          path={CATEGORIES}
          component={waitingComponent(
            lazy(() =>
              import("./components/CategoriesComponents/CategoriesContainer")
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
