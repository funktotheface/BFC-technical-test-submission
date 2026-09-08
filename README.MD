B&FC Course Search Technical Assessment

A responsive course search interface created for the Blackpool and The Fylde College Web Developer technical assessment.

The application uses the supplied mock course data and allows users to search, filter, sort and browse the available courses.

Live Demo

View the deployed application

Built With

* HTML
* CSS
* Vanilla JavaScript
* Git / GitHub
* GitHub Pages

I chose to keep the project lightweight and work directly with the supplied JavaScript course data rather than introducing any additional frameworks or dependencies.

Approach

I started by reviewing the supplied course data and identifying the values I would need for searching, filtering, sorting and displaying the results.

The application uses a central state object to keep track of the user’s current search term, filters, sorting option and page number. When the user changes one of these controls, the state is updated and the displayed results are recalculated.

Each time the results are updated, I create a new shallow copy of the original course array. This gives the application a fresh working dataset for filtering and sorting without modifying the original supplied data.

Dynamic Filters

Rather than hard-coding the available filter options into the HTML, these are generated from the course data itself.

I used JavaScript Set objects to create unique lists of qualification levels, qualification types and subject areas. These are then used to populate the relevant filter controls.

This means that if new courses with different subject areas, qualification types or qualification levels were added to the dataset, the interface could adapt without those options also having to be manually added to the HTML.

Search, Filtering and Sorting

Keyword search checks both course titles and course summaries.

Filters can be used individually or in combination, with the application narrowing the working dataset before sorting and pagination are applied.

Results are displayed 10 courses at a time, with pagination generated according to the number of matching results.

Accessibility

Accessibility was considered throughout the build, including semantic HTML, labelled form controls, keyboard-accessible native elements and clear visual feedback.

The completed application achieved a 100/100 Lighthouse Accessibility score.

Future Improvements

Given more development time, there are a few areas I would explore further:

* In a production environment I would expect the course data to come from a CMS, database or API rather than being bundled directly with the front end.
* Search and filter selections could be stored as URL parameters, allowing users to bookmark or share a specific set of course results.
* Further UI refinement and subtle interaction feedback could be introduced while maintaining the accessibility of the interface.
* Automated tests could be added around the search, filtering and sorting functions.

Running Locally

Clone the repository:

git clone https://github.com/funktotheface/BFC-technical-test-submission.git

The project has no external dependencies or build process and can be served using a local development server.

Notes

The project was completed within the scope and time constraints of the supplied technical assessment. My priority was to produce a clear, functional and maintainable solution to the requirements before considering additional features or dependencies.