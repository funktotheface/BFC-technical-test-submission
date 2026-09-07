//set application state and register required DOM elements


const PAGE_SIZE = 10;
const allCourses = loadMockourses;

//state is source of truth, search parameters are mapped to the state object.
//this allows easy reliable access to the users desired search terms throughout the script
const state = {
    search: '',
    level: 'all',
    type: 'all',
    subject: 'all',
    sort: 'title-asc',
    page: 1
};

//setting up references to DOM elements to be used throughout the script
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');

const levelFilter = document.getElementById('level-filter');
const typeFilter = document.getElementById('type-filter');
const subjectFilter = document.getElementById('subject-filter');

const sortSelect = document.getElementById('sort');

const coursesContainer = document.getElementById('courses');
const resultsCounter = document.getElementById('results-counter');
const paginationContainer = document.getElementById('pagination');
const noResultsMessage = document.getElementById('no-results');

//set filter options
//rather than hard coding filter options, we will extract them from the data set 
//this will allow the application to work even  if new data is added in the future

//this function will be the tool by which filter options are populated
function populateSelect(selectElement, values, labelFormatter) {

    for (const value of values) {

        const option = document.createElement('option');

        option.value = value;
        option.textContent = labelFormatter(value);

        selectElement.appendChild(option);
    }
}

//get all unique options from the data set, we can use a set to get the data without duplicates
const qualificationLevels = [
    ...new Set(allCourses.map(course => course.qualification_level))
].sort((a, b) => a - b);

const qualificationTypes = [
    ...new Set(allCourses.map(course => course.qualification_type))
].sort((a, b) => a.localeCompare(b));

const subjectAreas = [
    ...new Set(allCourses.map(course => course.subject_area))
].sort((a, b) => a.localeCompare(b));

//now we can call our populateSelect function and pass through the target data and destination element
populateSelect(
    levelFilter,
    qualificationLevels,
    level => `Level ${level}`
);

populateSelect(
    typeFilter,
    qualificationTypes
);

populateSelect(
    subjectFilter,
    subjectAreas
);

//search function
//check if current search term matches a course

function matchesSearch(course, searchTerm)  {
    //trim input to mitigate spacing incosostencies
    const term = searchTerm.trim().toLowerCase();

    //empty search term returns all courses
    if (term === '') {
        return true;
    }

    //standardise values while ensuring fallback empty string is available (incase future records are missing these fields)
    const title = (course.course_title || '').toLowerCase();
    const summary = (course.summary || '').toLowerCase();

    return (
        title.include(term) ||
        summary.includes(term)
    );
}

