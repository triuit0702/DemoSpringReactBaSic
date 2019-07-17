import React, { Component } from 'react';
import ListCoursesComponent from "./ListCoursesComponent.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CourseComponent from "./CourseComponent";

class Instruction extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Instructor Application</h1>
                    <Route path="/" exact component={ListCoursesComponent} />
                    <Route path="/courses/" exact component={ListCoursesComponent} />
                    <Route path="/courses/:id" component={CourseComponent} />
                </div>
            </Router>
        );
    }
}

export default Instruction;