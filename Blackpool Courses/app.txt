const loadCourses = () => {
    // Load the first 10 courses
    const coursesData = loadMockCourses().slice(0, 10);
    const coursesContainer = document.getElementById('courses');

    // Clear existing courses
    coursesContainer.innerHTML = '';

    // Create and append course cards
    for (const course of coursesData) {
        const courseElement = document.createElement('article');
        courseElement.innerHTML = `
            <h2>${course.course_title}</h2>`;
        coursesContainer.appendChild(courseElement);
    }

};

// Load courses on page load
loadCourses();



