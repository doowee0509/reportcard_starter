/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, 
as well as update the `studentInformation` object with your personal information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, all tests in the report should be passing.
*/

const studentInformation = {
  name: "Duy Nguyen",
  grade: "A",
  advisor: "Rebecca",
  major: "Computer Science",
  graduationYear: "2024",
  imageUrl: "https://swebtoon-phinf.pstatic.net/20210517_60/1621234995956phIc2_JPEG/thumbnail.jpg",
}

let semester = "Spring Semester"

const studentData = {
  "Spring Semester": [
    { code: "LIT 101", name: "English Literature 101", semester: "Spring 2021", credits: 5, grade: "B+" },
    { code: "CS 50", name: "Intro to Computer Science", semester: "Spring 2021", credits: 5, grade: "A-" },
    { code: "WD 140", name: "Modern Web Development", semester: "Spring 2021", credits: 5, grade: "A+" },
    { code: "JS 2.0", name: "Serverside JavaScript", semester: "Spring 2021", credits: 10, grade: "A-" },
  ],
  "Fall Semester": [
    { code: "Math 600", name: "Differential Equations", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "CS 10", name: "Python Programming", semester: "Fall 2020", credits: 5, grade: "A" },
    { code: "History 99", name: "History of Computers", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "MD 00", name: "Meditation and Mindfullness", semester: "Fall 2020", credits: 5, grade: "A+" },
  ],
  "Winter Term": [
    { code: "PHYS ED", name: "Physical Activity", semester: "Winter 2020", credits: 5, grade: "A-" },
    { code: "GEN ED", name: "General Education Requirement", semester: "Winter 2020", credits: 5, grade: "A+" },
  ],
}

const gpaPointsLookup = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
}

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */
const stName = document.querySelector("#student-name")
const stAdvisor = document.querySelector("#student-advisor")
const stMajor = document.querySelector("#student-major")
const stGradeLevel = document.querySelector("#student-grade-level")
const stGraduationYear = document.querySelector("#student-graduation-year")
const stImg = document.querySelector("#student-image")
const dropdownLabel = document.querySelector(".dropdown-label")
const dropdownEl = document.querySelector(".dropdown")
const dropdownElement = document.querySelector(".dropdown-menu") 
const dropdownButtonElement = document.querySelector(".dropdown-button")
const fallSemesterElement = document.querySelector("#fall-semester")
const springSemesterElement = document.querySelector("#spring-semester")
const winterTermElement = document.querySelector("#winter-term")
const reportCardTableElement = document.querySelector("#report-card-table")

// ADD more query selectors here

/**
 * SOLUTIONS FOR STUDENT INFO DOM UPDATES
 */

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {
  // code goes here
  stName.innerHTML = studentName
}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
  // code goes here
  stGradeLevel.innerHTML = studentGradeLevel
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
  // code goes here
  stAdvisor.innerHTML = studentAdvisor
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
  // code goes here
  stMajor.innerHTML = studentMajor
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationyear - the year the student graduates
 */
function updateStudentGraduationYear(graduationYear) {
  // code goes here
  stGraduationYear.innerHTML = graduationYear
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {
  // code goes here
  stImg.src = imageUrl
}

/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo(studentInformationObject) {
  updateStudentName(studentInformationObject.name)
  updateStudentGradeLevel(studentInformationObject.grade)
  updateStudentAdvisor(studentInformationObject.advisor)
  updateMajor(studentInformationObject.major)
  updateStudentGraduationYear(studentInformationObject.graduationYear)
  updateStudentImage(studentInformationObject.imageUrl)
}

/**
 * SOLUTION FOR INNER HTML DOM UPDATES
 */

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders(reportCardTableElement) {
  // update the code here
  reportCardTableElement.innerHTML += `<div class="table-row table-header">
  <h4 class="code-col">Code</h4>
  <h4 class="name-col">Name</h4>
  <h4 class="sem-col">Semester</h4>
  <h4 class="cred-col">Credits</h4>
  <h4 class="lett-col">Letter</h4>
  <h4 class="pts-col">Points</h4>
</div>`
}

/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(reportCardTableElement, course, rowNum) {
  // update the code here with information about the course passed to this function
  reportCardTableElement.innerHTML += `
      <div class="table-row row-${rowNum + 1} ${rowNum % 2 === 1 ? "odd" : "even"} course-row">
        <h4 class="code-col">${course.code}</h4>
        <h4 class="name-col">${course.name}</h4>
        <h4 class="sem-col">${course.semester}</h4>
        <h4 class="cred-col"><span class="credit">${course.credits}</span> credits</h4>
        <h4 class="lett-col">${course.grade}</h4>
        <h4 id="gpa-${rowNum + 1}" class="pts-col">${gpaPointsLookup[course.grade]}</h4>
      </div>
    `
}

/**
 * This function should add HTML for the totals row in the report card.
 */
function addTotalsRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += `<div class="table-row totals">
  <h4 class="code-col"></h4>
  <h4 class="name-col"></h4>
  <h4 class="sem-col">Totals:</h4>
  <h4 id="total-credits" class="cred-col"> ? credits </h4>
  <h4 class="lett-col"></h4>
  <h4 id="total-pts" class="pts-col">?</h4>
</div>`
}

/**
 * This function should add HTML for the final row in the report card.
 */
function addGpaRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += `<div class="table-row gpa odd">
  <h4 class="code-col"></h4>
  <h4 class="name-col"></h4>
  <h4 class="sem-col">GPA:</h4>
  <h4 class="cred-col"></h4>
  <h4 class="lett-col"></h4>
  <h4 id="gpa" class="pts-col"> ?</h4>
</div>`
}

/**
 * This is the primary function used to update the report card when the semester changes
 *
 * It should call the other functions responsible for creating the necessary HTML
 *
 */
function updateReportCard(reportCardTableElement, currentSemester) {
  // update the dropdown label
  updateDropdownLabel()

  // reset the report card table's inner html to an empty string
  if (reportCardTableElement) reportCardTableElement.innerHTML = ``

  // add your code here
  addReportCardHeaders(reportCardTableElement)
  let i = 0
  studentData[currentSemester].forEach((course) => {
    addCourseRowToReportCard(reportCardTableElement, course, i)
    i++
  });
  addTotalsRow(reportCardTableElement)
  addGpaRow(reportCardTableElement)
  document.querySelector('#total-credits').innerHTML = addUpStudentCredits(reportCardTableElement) + ' credits'
  document.querySelector('#total-pts').innerHTML = calculateSemesterGpa(reportCardTableElement)[0] 
  document.querySelector('#gpa').innerHTML = calculateSemesterGpa(reportCardTableElement)[1]
}

/**
 * SOLUTION FOR DROPDOWN EVENT HANDLERS
 */

/**
 * These two functions should be used to toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, the 'openDropdown' function should remove it.
 * If the dropdown classList doesn't contain the "closed" class, 'closeDropdown' function should add it.
 */
function closeDropdown(dropdownElement) {
  // code goes here
  // if (!dropdownElement.classList.contains('closed')) {
  //   dropdownElement.classList.add('closed');
  // }
  dropdownElement.classList.add('closed');
}

function openDropdown(dropdownElement) {
  // code goes here
  if (dropdownElement.classList.contains('closed')) {
    dropdownElement.classList.remove('closed');
  }
}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 *
 */
function updateDropdownLabel() {
  // code goes here
  dropdownLabel.innerHTML = semester
}

/**
 * This function should add the proper event listeners to the correct DOM elements
 * responsible for managing the state of the dropdown menu.
 *
 */
function addEventListeners(
  dropdownElement,
  dropdownButtonElement,
  reportCardTableElement,
  fallSemesterElement,
  springSemesterElement,
  winterTermElement
) {
  // Add an event listener for the dropdown button that calls the openDropdown function with the correct DOM element
  // Add 3 event listeners - one for the fall semester option, the spring semester option, and the winter term option
  // Each callback function one should update the `semester` variable,
  // call the `updateReportCard` function, and close the dropdown
  dropdownButtonElement.addEventListener("click", event => {
    openDropdown(dropdownEl);
  });

  springSemesterElement.addEventListener("click", event => {
    semester = springSemesterElement.textContent
    closeDropdown(dropdownEl);
    updateReportCard(reportCardTableElement, semester)
  });

  fallSemesterElement.addEventListener("click", event => {
    semester = fallSemesterElement.textContent
    closeDropdown(dropdownEl);
    updateReportCard(reportCardTableElement, semester)
  });

  winterTermElement.addEventListener("click", event => {
    semester = winterTermElement.textContent
    closeDropdown(dropdownEl);
    updateReportCard(reportCardTableElement, semester)
  });
}

/***************
   CALCULATIONS
****************/

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the credits the student has earned for each course.
 * Add them up and display the total in the proper location.
 *
 * It may be useful to check for the existence of certain elements
 * before updating the DOM.
 *
 */
function addUpStudentCredits(reportCardTableElement) {
  // code goes here
  var children = reportCardTableElement.children;
  var total = 0
  for (var i = 0; i < children.length; i++) {
    var tableChild = children[i];
    if (tableChild.classList.contains('course-row')) {
      total += parseInt(tableChild.children[3].children[0].innerHTML)
    }
  }
  return total
}

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the letter grades for each course and convert them to GPA points using
 * the `pointsLookup` object.
 *
 * That English Literature grade is keeping us from all A's! Let's see if we can't update that to an A-
 * since we definitely deserve it after a hard semester of work.
 *
 * Then perform a quick calculation and update the report card with the total points and
 * cumulative grade point average for the semester.
 *
 */

function calculateSemesterGpa(reportCardTableElement) {
  // code goes here
  var children = reportCardTableElement.children;
  var total = 0
  var count = 0
  for (var i = 0; i < children.length; i++) {
    var tableChild = children[i];
    if (tableChild.classList.contains('course-row')) {
      total += parseFloat(tableChild.children[5].innerHTML)
      count++
    }
  }
  return [total, total / count]
}

window.onload = function () {
  // execute your functions here to make sure they run as soon as the page loads
  populateStudentInfo(studentInformation)
  addEventListeners(
    dropdownElement,
    dropdownButtonElement,
    reportCardTableElement,
    fallSemesterElement,
    springSemesterElement,
    winterTermElement
  )
}
