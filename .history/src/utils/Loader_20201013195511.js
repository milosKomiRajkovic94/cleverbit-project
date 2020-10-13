import React from "react";

import { BeatLoader } from "react-spinners";

import PropTypes from "prop-types";

const Loader = ({
  classNameOfWrapper,
  classNameOfLoader,
  classNameOfText,
  text,
}) => {
  return (
    <div
      className={
        classNameOfWrapper === undefined || classNameOfWrapper === null
          ? "loaderWrapperDefaultStyle"
          : `loaderWrapperDefaultStyle ${classNameOfWrapper} `
      }
    >
      <BeatLoader
        loading
        className={
          classNameOfLoader === undefined || classNameOfLoader === null
            ? "loaderDefaultStyle"
            : `loaderDefaultStyle ${classNameOfLoader}`
        }
      />
      {text === undefined || text === null ? (
        ""
      ) : (
        <p
          className={
            classNameOfText === undefined || classNameOfLoader === null
              ? "loaderTextDefaultStyle"
              : `loaderTextDefaultStyle ${classNameOfText}`
          }
        >
          {text}
        </p>
      )}
    </div>
  );
};

Loader.propTypes = {
  classNameOfWrapper: PropTypes.string,
  classNameOfLoader: PropTypes.string,
  classNameOfText: PropTypes.string,
  text: PropTypes.string,
};

Loader.defaultProps = {
  classNameOfWrapper: "",
  classNameOfLoader: "",
  classNameOfText: "",
  text: "",
};

export default Loader;
