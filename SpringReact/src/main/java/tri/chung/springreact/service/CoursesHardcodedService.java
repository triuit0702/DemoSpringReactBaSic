package tri.chung.springreact.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import tri.chung.springreact.model.Course;

@Service
public class CoursesHardcodedService {

	private static List<Course> courses = new ArrayList<>();
	private static long idCounter = 0;

	static {
		courses.add(new Course(++idCounter, "28minutes", "Learn full stack with spring boot and angular"));
		courses.add(new Course(++idCounter, "28minutes", "Learn full stack with spring boot and react"));
		courses.add(new Course(++idCounter, "28minutes", "Learn full stack with spring boot and vuejs"));

	}

	public List<Course> findAll() {
		return courses;
	}

	public ResponseEntity<Void> deleteById(long id) {
		Course course = finById(id);
		if (course == null) {
			return null;
		}

		if (courses.remove(course)) {
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
		return null;

	}

	public Course finById(long id) {
		for (Course c : courses) {
			if (c.getId() == id) {
				return c;
			}
		}
		return null;
	}
	
	// update course
	public Course save(Course course) {
		if (course.getId() == -1) {
			course.setId(++idCounter);
			courses.add(course);
			return course;
		}
		deleteCourseById(course.getId());
		courses.add(course);
		return course;
	}

	// delete 
	@SuppressWarnings("unused")
	private void deleteCourseById(long id) {
		for (int i = 0; i < courses.size(); i++) {
			if (courses.get(i).getId() == id) {
				courses.remove(i);
				return;
			}
		}
	}
}
