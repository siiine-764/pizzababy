import React from "react";
import logo from "../assets/logo.jpg";
import "./ProjectsPage.css";
import {MOCK_PROJECTS} from './MockProjects';
import { Project } from "./Project";



function ProjectsPage() {
    return (
        <div className="container" id="controller">
            <div className="row">
                <div className="col-12">
                <img src={logo} alt="" id="logo" />
                <ul>
                <li>
                    <a href="#pizza">PIZZA#1</a>
                    <a href="#">PIZZA#1</a>
                    <a href="#">PIZZA#1</a>
                    <a href="#">PIZZA#1</a>
                    <a href="#">PIZZA#1</a>
                    <a href="#">PIZZA#1</a>
                    <a href="#">PIZZA#1</a>
                    <a href="#">PIZZA#1</a>
                </li>

                <li>
                    <a href="#hamburger">HAMBURGER#2</a>
                    <a href="#">HAMBURGER#2</a>
                    <a href="#">HAMBURGER#2</a>
                    <a href="#">HAMBURGER#2</a>
                    <a href="#">HAMBURGER#2</a>
                    <a href="#">HAMBURGER#2</a>
                    <a href="#">HAMBURGER#2</a>
                    <a href="#">HAMBURGER#2</a>
                </li>
                <li>
                    <a href="#componentcontact">CAREER#3</a>
                    <a href="#">CAREER#3</a>
                    <a href="#">CAREER#3</a>
                    <a href="#">CAREER#3</a>
                    <a href="#">CAREER#3</a>
                    <a href="#">CAREER#3</a>
                    <a href="#">CAREER#3</a>
                    <a href="#">CAREER#3</a>
                </li>      
                <li>
                    <a href="#componentcontact">FEATURES#4</a>
                    <a href="#">FEATURES#4</a>
                    <a href="#">FEATURES#4</a>
                    <a href="#">FEATURES#4</a>
                    <a href="#">FEATURES#4</a>
                    <a href="#">FEATURES#4</a>
                    <a href="#">FEATURES#4</a>
                    <a href="#">FEATURES#4</a>
                </li> 
                <li>
                    <a href="#componentcontact">ABOUT#5</a>
                    <a href="#">ABOUT#5</a>
                    <a href="#">ABOUT#5</a>
                    <a href="#">ABOUT#5</a>
                    <a href="#">ABOUT#5</a>
                    <a href="#">ABOUT#5</a>
                    <a href="#">ABOUT#5</a>
                    <a href="#">ABOUT#5</a>
                </li>
                <li>
                    <a href="#componentcontact">CONTACT#6</a>
                    <a href="#">CONTACT#6</a>
                    <a href="#">CONTACT#6</a>
                    <a href="#">CONTACT#6</a>
                    <a href="#">CONTACT#6</a>
                    <a href="#">CONTACT#6</a>
                    <a href="#">CONTACT#6</a>
                    <a href="#">CONTACT#6</a>
                </li>
            </ul>
                </div>
            {/* <> 
            <pre>
                {JSON.stringify(MOCK_PROJECTS, null, ' ')}
                </pre>
            </>*/}
            </div>
        </div>
    );
}

export default ProjectsPage;