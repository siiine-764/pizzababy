import React from "react";
import logo from "../assets/logo.jpg";
import "./ProjectsPage.css";
import {MOCK_PROJECTS} from './MockProjects';
import { Project } from "./Project";



function ProjectsPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                <img src={logo} alt="" id="logo" />
                <ul>
                <li>
                    <a href="#pizza">PIZZA</a>
                    <a href="#">PIZZA</a>
                    <a href="#">PIZZA</a>
                    <a href="#">PIZZA</a>
                    <a href="#">PIZZA</a>
                    <a href="#">PIZZA</a>
                    <a href="#">PIZZA</a>
                    <a href="#">PIZZA</a>
                </li>
                <li>
                    <a href="#">ddd</a>
                    <a href="#">ddd</a>
                    <a href="#">ddd</a>
                    <a href="#">ddd</a>
                    <a href="#">ddd</a>
                    <a href="#">ddd</a>
                    <a href="#">ddd</a>
                    <a href="#">ddd</a>
                </li>
            </ul>
                </div>
            <>
            <pre>
                {JSON.stringify(MOCK_PROJECTS, null, ' ')}
                </pre>
            </>
            </div>
        </div>
    );
}

export default ProjectsPage;