import React, { Component } from 'react';
import CourseDataService from '../service/CourseDataService';
import "./CourseComponent.css";

class CourseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            description: '',
        }
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        CourseDataService.retrieveCourse(this.state.id)
            .then(
                response => {
                    this.setState({
                        description: response.data.description,
                    });
                }
            )
    }

    handleSubmit(event) {
        event.preventDefault();
        const { id } = this.state
        console.log(this.state.description);
        let course = {
            id: id,
            username: "28minutes",
            description: this.state.description,
        }
        if (id === -1) {
            CourseDataService.createCourse(course)
                .then(() => this.props.history.push(`/course/`))
        }
        else {
            CourseDataService.updateCourse(this.state.id, course)
                .then(() => this.props.history.push(`/courses/`))
        }

    }

    onChangeDescription(event) {
        this.setState({
            description: event.target.value
        });
    }



    render() {
        const { id, description } = this.state;
        console.log("des: " + description);
        return (
            <div>
                <form onSubmit={this.handleSubmit} class="">
                    <label>Id: </label>
                    <input class="form-control" type="text" value={id} />
                    <br />
                    <label>Description: </label>
                    <input class="form-control" type="text" value={description} onChange={this.onChangeDescription} />
                    <br />
                    <div class="row justify-content=center">
                        <button class="btn btn-primary" type="submit">submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CourseComponent;