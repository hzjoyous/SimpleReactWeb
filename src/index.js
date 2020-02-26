import React from "react";
import { render } from 'react-dom'
import App from "./App"
import './index.less'
import 'material-design-icons/iconfont/material-icons.css';


render(
    <App />
    ,
    document.querySelector('#root')
    // document.body
)