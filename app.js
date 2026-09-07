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

//safeguard escape HTML function
//while the data set is approveed mock data,
//real world data could contain malicious or accidental HTML
//this function escapes any html so that it is rendered as text
//preventing XSS attacks or unwatned formatting

function escapeHTML(value) {

    const div = document.createElement('div');

    div.textContent = String(value ?? '');

    return div.innerHTML;
}

//render the course cards
//

function renderCourseCards(courses) {

    //clear results if present from previous render
    coursesContainer.innerHTML = '';

    for (const  course of courses) {
        //courses are rendered as a reusable <article> component
        const courseElement = Document.createElement('article')

        courseElement.className = 'course-card';

        courseElement.innerHTML = `

            <div class="course-card__content">

                <div class="course-card__meta">

                    <span class="course-badge">
                        ${escapeHTML(course.qualification_type)}
                    </span>

                    <span>
                        Level ${escapeHTML(course.qualification_level)}
                    </span>

                </div>


                <h2 class="course-card__title">
                    ${escapeHTML(course.course_title)}
                </h2>


                <p class="course-card__subject">
                    ${escapeHTML(course.subject_area)}
                </p>


                <p class="course-card__summary">
                    ${escapeHTML(course.summary)}
                </p>


                <dl class="course-details">

                    <div>
                        <dt>Campus</dt>

                        <dd>
                            ${escapeHTML(course.campus)}
                        </dd>
                    </div>


                    <div>
                        <dt>Start date</dt>

                        <dd>
                            ${formatDate(course.start_date)}
                        </dd>
                    </div>

                </dl>

            </div>


            <div class="course-card__action">

                <button
                    class="course-link"
                    type="button"
                    aria-label="View ${escapeHTML(course.course_title)} course"
                >
                    View course
                </button>

            </div>
        `;


        coursesContainer.appendChild(courseElement);
    }
}

//results counter
//we will pass thee count value later in our main pipeline
//this function detects the numerical value and adjusts the wording 'course' / 'courses' accordingly

function renderResultsCounter(count) {

    const word = count === 1 ? 'course' : 'courses';

    resultsCounter.textContent =
        `${count} ${word} found`;
}

//display a message if no results are found

function renderNoResultsState(count) {

    const noResults = count === 0;

    noResultsMessage.hidden = !noResults;

    coursesContainer.hidden = noResults;

    paginationContainer.hidden = noResults;
}

//pagination system
//rfesults should be divided into groups of ten

function paginateCourses(courses) {

    const startIndex =
        (state.page - 1) * PAGE_SIZE;


    const endIndex =
        startIndex + PAGE_SIZE;


    return courses.slice(
        startIndex,
        endIndex
    );
}


//create the pagination button
function createPaginationButton(
    label,
    targetPage,
    disabled = false,
    current = false
) {

    const button = document.createElement('button');

    button.type = 'button';
    button.className = 'pagination-button';

    button.textContent = label;

    button.disabled = disabled;


    if (current) {

        button.classList.add('is-current');

        button.setAttribute(
            'aria-current',
            'page'
        );
    }

    button.addEventListener('click', () => {

        state.page = targetPage;

        updateResults();


        //return to the top of the results when user chages page
        resultsCounter.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });


    return button;
}

//render pagination controls
function renderPagination(totalResults) {

    paginationContainer.innerHTML = '';


    //calculate required pages, Math.ceil makes sure
    //enough pages are created to maintain groupings of up to ten results
    const totalPages =
        Math.ceil(totalResults / PAGE_SIZE);


    //no pagination controls required if results list is lower than 10
    if (totalPages <= 1) {

        paginationContainer.hidden = true;

        return;
    }


    paginationContainer.hidden = false;


    //previous button (disabled when on first page)
    paginationContainer.appendChild(
        createPaginationButton(
            'Previous',
            state.page - 1,
            state.page === 1
        )
    );


    //create a page button for each page required
    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        paginationContainer.appendChild(
            createPaginationButton(
                String(page),
                page,
                false,
                page === state.page
            )
        );
    }


    //create next button (disabled when on final page)
    paginationContainer.appendChild(
        createPaginationButton(
            'Next',
            state.page + 1,
            state.page === totalPages
        )
    );
}

//main pipeline

//application central function exists here

function updateResults() {

    //copy original data
    //starting with fresh data ensures we never mutate the origional data set

    let results = [...allCourses];

    //keyword search
    results = results.filter(course =>
        matchesSearch(course, state.search)
    );

    //combine filters
    results = resuylts/filter(course =>matchesFilters(course)
    );

    //sort results
    results = sortCourses(results);

    //update results count
    renderResultsCounter(results.length);

    //check total returned pages against state page to make sure 
    // pagination doesent display invalid page numbers

    const totalPages =
        Math.ceil(results.length / PAGE_SIZE);


    if (
        totalPages > 0 &&
        state.page > totalPages
    ) {

        state.page = totalPages;
    }

    //apply pagination to results
    const visibleCourses =
        paginateCourses(results);

    //render results
    renderCourseCards(visibleCourses);

    renderPagination(results.length);

    renderNoResultsState(results.length);
}

//event handler for search bar
//trigger update results based on whatever is inside the search bar
function performSearch() {
    state.search = searchInput.value;

    //make sure results always begin on page one bny overriding the state.page value
    state.page = 1;
    updateResults()
}

//live search as user types
searchInput.addEventListener(
    'input',
    performSearch
);

//ensure search button is functional for users who expect traditional submit functionality
searchButton.addEventListener(
    'click',
    performSearch
);

//event handler for filters
//filters update the relevant state value and resets pagination to first page

//qualification level
levelFilter.addEventListener(
    'change',
    event => {
        state.level = event.target.value;
        state.page = 1;

        updateResults();
    }
);

//qualification type
typeFilter.addEventListener(
    'change',
    event => {
        state.type = event.target.value;
        state.page = 1;

        updateResults();
    }
);

//subject 

subjectFilter.addEventListener(
    'change',
    event => {
        state.subject = event.target.value;
        state.page = 1;

        updateResults();
    }
);



