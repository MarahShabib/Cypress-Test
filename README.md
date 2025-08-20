# National Geographic Cypress Tests

This repository contains automated test cases for the National Geographic website using **Cypress**.

---

## Prerequisites

Before running the tests, make sure you have installed:

* [Node.js](https://nodejs.org/) (v18+ recommended)
* npm (comes with Node.js)
* Git

---

## Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/MarahShabib/Cypress-Test.git
cd Cypress-Test
```

2. **Install dependencies:**

```bash
npm install
```

Dependencies include:

* Cypress
* TypeScript
* Cypress Iframe

3. **Run Cypress Tests:**

```bash
npx cypress open
```

## Test File Location
All test specifications are located in the `cypress/e2e` directory:

## Test Suites

### 1. National Geographic Login Scenarios

This suite validates login and account creation functionality.

**Notes:**

* Authentication occurs inside an iframe (`iframe#oneid-iframe`), using the helper function `getIframeBody`.
* Tests ensure:

  * Existing users can log in successfully.
  * New users can create an account and log in afterward.

---

### 2. National Geographic Search Scenarios

This suite verifies the search functionality.

**Tests ensure:**

* Searching with a valid query returns relevant results.
* Submitting an empty search input shows default content without breaking the application.

---

### 3. Article Category Filter Tests

This suite validates category navigation and filtering.

**Tests ensure:**

* Selecting a category (e.g., Animals, Science & Nature) displays corresponding articles.
* Subcategory navigation works correctly.

---

### 4. National Geographic Logo

This suite verifies the logo behavior across different pages.

**Tests ensure:**

* The logo is always visible.
* The logo uses the correct image source.
* Clicking the logo navigates back to the homepage.







