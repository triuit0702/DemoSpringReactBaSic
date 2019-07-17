package tri.chung.springreact.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tri.chung.springreact.model.Course;
import tri.chung.springreact.service.CoursesHardcodedService;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class CourseController {

	@Autowired
	private CoursesHardcodedService courseManagementService;

	@GetMapping("/")
	public String index() {
		return "<html><h1>Chao cac ban</h1></html>";
	}

	@GetMapping("/instructors/{username}/courses")
	public List<Course> getAllCourses(@PathVariable String username) {
		return courseManagementService.findAll();
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Void> deleteCoursesById(@PathVariable long id) {
		return courseManagementService.deleteById(id);
	}

	@GetMapping("/course/{id}")
	public Course getCourseById(@PathVariable long id) {
		return courseManagementService.finById(id);
	}

	@PutMapping("/course/{id}")
	public ResponseEntity<Course> updateCourse(@RequestBody Course course) {
		Course updatedCourse = courseManagementService.save(course);
		return new ResponseEntity<Course>(updatedCourse, HttpStatus.OK);
	}
	
	@PostMapping("/course")
	public ResponseEntity<Course> createCourse(@RequestBody Course course) {
		Course newCourse = courseManagementService.save(course);
		return new ResponseEntity<>(newCourse, HttpStatus.CREATED);
	}
}
