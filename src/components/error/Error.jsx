import React from "react";
import { connect } from 'react-redux';
import { setErrorMessage } from "./erroAction";
import './error.scss';

const Error = ({ errorMessage, setErrorMessage }) => (
    <>
        {errorMessage &&
        <div className="error-modal">
            <button
                className="close"
                onClick={() => setErrorMessage(null)}
            >
                &times;
            </button>
            <div className="error-content">
                <h3>Something went wrong...</h3>
                <p>{errorMessage}</p>
            </div>
        </div>
        }
    </>
);

export default connect(
    store => ({ errorMessage: store.error.errorMessage }),
    { setErrorMessage })(Error);
