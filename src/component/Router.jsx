import { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomeComponent";
import DoctoresEspecialidad from "./DoctoresEspecialidad";

export default class Router extends Component {
    render() {
        return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/DoctoresEspecialidad" element={<DoctoresEspecialidad />} />
            </Routes>
        </BrowserRouter>
        )
    }
}
