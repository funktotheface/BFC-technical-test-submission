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
function populateSelect(selectElement, values, labelFormatter = value => value) {

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
        title.includes(term) ||
        summary.includes(term)
    );
}

//filter function
//this will work similarly to the search funtion, but we're checking against selected paramters instead  of text content

function matchesFilters(course) {

    const matchesLevel =
        state.level === 'all' ||
        course.qualification_level === Number(state.level);


    const matchesType =
        state.type === 'all' ||
        course.qualification_type === state.type;


    const matchesSubject =
        state.subject === 'all' ||
        course.subject_area === state.subject;

    return (
        matchesLevel &&
        matchesType &&
        matchesSubject
    );
}

//sorting results
// we will push results into a new array to avoid mutating the the origional courses array

function sortCourses(courses) {
    const sortedCourses = [...courses];

    switch (state.sort) {
        //a-z
        case 'title-asc':
            sortedCourses.sort((a, b) =>
                a.course_title.localCompare(b.course_title)
            );

            break;
        //z-a
        case 'title-desc':
            sortedCourses.sort((a, b) => 
                b.course_title.localCompare(a.course_title)
            );

            break;
       //lvl asc    
        case 'level-asc':
            sortedCourses.sort((a, b) =>
                a.qualification_level - b.qualification_level
            );

            break;
        //lvl desc 
        case 'level-desc':
            sortedCourses.sort((a, b) => 
                b.qualification_level - a.qualification_level
            );

            break;
        //date earliest first
        case 'date-asc':
            sortedCourses.sort((a, b) => 
                new Date(a.start_date) - new Date(b.start_date)
            );

            break;
        //date latest first
        case 'date-deac':
            sortedCourses.sort((a, b) =>
                new Date(b.start_date)  - new Date (a.start_date)
            );

            break;
    }

    return sortedCourses;
}

//date formatting
//course dates are currently in ISO, we should make them more readable for UK users
//e.g. 2027-09-13 >>> 13 September 2027

function formatDate(dateString) {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).formate(date);
}