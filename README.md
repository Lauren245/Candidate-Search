# Candidate Search

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) - https://opensource.org/licenses/MIT

## Table of Contents
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Tests](#tests)

[License](#license)

[Questions](#questions)

[Resources](#resources)

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Tutorials and Documentation](#tutorials-and-documentation)

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3rd-Party Software](#3rd-party-software)

[Screenshots](#screenshots)

[Render Deployed Version](#render-deployed-version)

## Description
Candidate Search is a web application that allows users to search for GitHub users and view their profiles. Users can browse through a list of potential candidates, view detailed information about each candidate, and save their favorite candidates for future reference. The application leverages the GitHub API to fetch user data and provides a user-friendly interface to manage and view candidate profiles.

The application's UI is currently not optimized for mobile devices; this will be implemented in a future update.

## Installation
**Note: The app does not need to be installed unless you wish to run the app locally on your machine. To just use the app go to https://candidate-search-vbhl.onrender.com/**

To install this application, follow these steps:
1. **Clone [repository](https://github.com/Lauren245/Candidate-Search)**.

2. **Install dependencies**: Ensure you have Node.js installed. Then, install the required dependencies using the command: ``npm install``.

3. **Set up environment variables**: Create a ``.env`` file in the root directory of the project and add your GitHub API token: ``VITE_GITHUB_TOKEN=your_github_token_here``. 

  - If you do not have a GitHub fine-grained personal access token, [refer to this documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token).

4. **Run the application**: Start the development server using: ``npm run dev``.

5. **Open the application**: Open your browser and navigate to the localhost url that Vite outputs to the console upon a successful launch.

## Usage
1. **Search for Candidates**:
  - Open the application in your browser.
  -  The application will automatically fetch a list of GitHub users on the home page.
  - You can view detailed information about each candidate, including their profile picture, username, name,     location, email, company, number of public repositories, and bio.

2. **Save Candidates**:
  - If you find a candidate you are interested in, click the green checkmark button to save the candidate.
  - The candidate will be added to your list of saved candidates and stored in your browser's local storage.

3. **Reject Candidates**:
  - If you are not interested in a candidate, click the red "X" button to go to the next potential candidate.

4. **View Saved Candidates**:
  - Navigate to the "View Saved Candidates" page using the navigation bar.
  - On this page, you will see a table listing all the candidates you have saved.
  - You can view detailed information about each saved candidate.
  - If you want to remove a candidate from your saved list, click the red "X" button next to the candidate's entry.

5. **Navigate Between Pages**:
  - Use the navigation bar at the top of the page to switch between the "Search Candidates" and "View Saved Candidates" pages.

## Tests
Currently, there are no unit tests. The application must be tested manually.

## License
Copyright 2025 Lauren Moore

This software uses an [MIT license](https://opensource.org/license/MIT).

## Questions
If you have additional questions, you can contact me at: 

GitHub: [Lauren245](https://github.com/Lauren245)

Email: laurenmoorejm@gmail.com

## Resources

### Tutorials and Documentation
1. **[GitHub REST API endpoints for users documentation](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28)**

2. **[HTML Tables](https://www.w3schools.com/html/html_tables.asp)** by W3Schools: Information on the layout of an HTML table.

3. **[localStorage in JavaScript: A complete guide](https://blog.logrocket.com/localstorage-javascript-complete-guide/)** by Nosa Obaseki: Information on get and set localStorage syntax.

## Screenshots

**Image of the search candidates page displaying a card with a potential candidate's GitHub information on it.**

![Screenshot of the Candidate Search web application. The interface has a dark blue gradient background with a centered candidate profile card. The profile card displays the developer's name ('Tymlez'), location ('Gold Coast'), email, company (marked as 'no company listed'), number of public repositories (12), and a bio mentioning 'Green Energy Centric Blockchain Solutions.' A 'View GitHub Profile' link is below the details. At the bottom of the card, there are two large circular buttons: a red 'X' for rejecting and a green checkmark for approving a candidate. The top navigation bar includes 'Search Candidates' and 'View Saved Candidates' options](./dist/assets/screenshots/Candidate-Search-Search-Candidates.jpg)


**Image of the view saved candidates page showing a table filled with saved potential candidates.**

![Screenshot of the 'Potential Candidates' page in the Candidate Search web application. The page has a dark blue gradient background and displays a table with six columns: 'Image,' 'Name,' 'Location,' 'Email,' 'Company,' 'Bio,' and 'Reject.' Each row represents a candidate with their profile image, name (linked to their GitHub profile), location, email, company, and bio. Some fields display 'no location,' 'no email,' 'no company listed,' or 'no bio' if the information is unavailable. A red 'X' button is in the 'Reject' column for each candidate. The top navigation bar includes 'Search Candidates' and 'View Saved Candidates' options.](./dist/assets/screenshots/Candidate-Search-View-Saved-Candidates.jpg)

## Render Deployed Version
[Click here](https://candidate-search-vbhl.onrender.com/) to view the app as deployed on Render.

*Note: since it is being hosted on a free tier, it will take a while for the app to load when opening it for the first time.*

--- 
**[Back to Top](#candidate-search)**