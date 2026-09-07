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