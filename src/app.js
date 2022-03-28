import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/form";
import './styles/styles.scss';

const APPLICATION = (
    <Form/>
)

const APPROOT = document.getElementById("app");

const RENDER = () => ReactDOM.render(APPLICATION, APPROOT);

RENDER();