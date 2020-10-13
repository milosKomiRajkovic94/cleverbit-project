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
        <div> 
            <button className={location.pathname === POSTS || location.pathname === HOME ? "selectedHeaderButton" : "ordinaryButton"}>
                Posts
            </button>
            <button className={location.pathname === COMMENTS ? "selectedHeaderButton" : "ordinaryButton"}>
                Comments
            </button>
        </div>
    )
}

export default withRouter(Header);