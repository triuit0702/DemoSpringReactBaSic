import axios from 'axios';

const INSTRUCTOR = "28minutes";
const COURSE_API_URL = "http://localhost:8080";
const INSTRUCTOR_API_URL = "${COURSE_API_URL}/instructors/${INSTRUCTOR}";

class CourseDataService {
    retrieveAllCourses() {
        return axios.get(`http://localhost:8080/instructors/28minutes/courses`);
    }

    deletItem(id) {
        return axios.delete(`http://localhost:8080/delete/${id}`);
    }

    retrieveCourse(id) {
        return axios.get(`http://localhost:8080/course/${id}`);
    }

    updateCourse(id, course) {
        return axios.put(`http://localhost:8080/course/${id}`, course);
    }

    createCourse(course) {
        return axios.post(`http://localhost:8080/course/`, course);
    }
}

export default new CourseDataService();