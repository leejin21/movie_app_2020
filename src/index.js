import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// App.js의 컨테이너가 public/index.html의 root id 아래에 들어가게 되는 원리

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
