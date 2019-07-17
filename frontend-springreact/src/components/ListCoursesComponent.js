import React, { Component } from 'react';
import CourseDataService from '../service/CourseDataService';
import "./CourseComponent.css";

class ListCoursesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            message: null,
        }
        this.refreshCourses = this.refreshCourses.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.addCourseClicked = this.addCourseClicked.bind(this);
    }

    componentDidMount() {
        this.refreshCourses();
    }
    refreshCourses() {
        CourseDataService.retrieveAllCourses()
            .then(
                response => {
                    console.log(response);
                    this.setState({ courses: response.data })
                }

            )
    }

    deleteItem(id) {
        CourseDataService.deletItem(id)
            .then(
                response => {
                    console.log(response);
                    this.setState({ message: `Delete course ${id} successful` })
                    this.refreshCourses()
                }

            )
    }

    updateCourse(id) {
        this.props.history.push(`/courses/${id}`);
    }

    addCourseClicked() {
        this.props.history.push(`/courses/-1`)
    }
    render() {
        const { message } = this.state;
        console.log("mg " + message);
        return (
            <div className="width_123">
                {/* <h3>All Courses</h3> */}
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div class="table-reponsive">
                    <table className="table">
                        <thead>
                            <tr class="d-flex abc">
                                <th className="col-md-1">Id</th>
                                <th className="col-md-8">Description</th>
                                <th className="col-md-1">Delete</th>
                                <th className="col-md-1">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(course => (
                                    <tr key={course.id} class="d-flex abc">
                                        <td className="col-md-1">{course.id}</td>
                                        <td className="col-md-8">{course.description}</td>
                                        <td className="col-md-1"><button className="btn btn-warning" onClick={() => this.deleteItem(course.id)}>Delete</button></td>
                                        <td className="col-md-1"><button className="btn btn-success" onClick={() => this.updateCourse(course.id)}>Update</button></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addCourseClicked}>Add</button>
                </div>
            </div>
        );
    }
}

export default ListCoursesComponent;