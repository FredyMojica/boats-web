import React from "react";
import './Loading.css';

export default function () {
    return (
        <div className="loading">
            <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>
    );
}