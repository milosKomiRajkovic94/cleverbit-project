import React from "react";

import {
    POSTS,
    COMMENTS,
    HOME
} from "../../constants/urls";

import {
    withRouter,
    useLocation,
  } from "react-router-dom";

const Header = ({ changeLocation }) => {
    const location = useLocation();

    return(
        <div className="header"> 
            <button className={location.pathname === POSTS || location.pathname === HOME ? "selectedHeaderButton" : "ordinaryButton"} onClick={() => changeLocation(POSTS)}>
                Posts
            </button>
            <button className={location.pathname === COMMENTS ? "rightButton selectedHeaderButton" : "rightButton ordinaryButton"} onClick={() => changeLocation(COMMENTS)}>
                Comments
            </button>
        </div>
    )
}

export default withRouter(Header);