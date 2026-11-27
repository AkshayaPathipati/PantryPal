# Test Cases: Gabriel E

**Team number:** 12
**My area:** Server & API Configuration

<!--
HOW TO USE THIS FILE
1. Copy this file. Name the copy with your first name and last initial, like  maria-g.md
2. Leave TEMPLATE.md untouched for your teammates.
3. If a Part 6 test belongs to your area, upgrade it first and put it in the first block.
   Write at least 4 test cases using at least 3 test types. Include 1 Acceptance test that traces to your Stakeholder Goal.
   Run every test on the inherited system. Every Fail gets a GitHub Issue.
4. Copy the block between the lines for each new test case.
5. Test IDs: use your initials plus a number, like  MG-01, MG-02. This keeps IDs unique across your team.
   "Traces to" must name one of YOUR requirement IDs, like REQ-MG-02.
6. See docs/TESTING_FIELD_GUIDE.md for the sample test case TC-00.
-->

---

**Test ID:** GE-01
**From Part 6:** New
**Written by:** Gabriel E
**Title:** Server returns saved recipes from the database
**Traces to:** REQ-GE-01
**Test type:** Integration 
**Preconditions:** Backend server is running and connected to MongoDB. At least one recipe exists in the database. 
**Test data:** An existing saved recipe named "Chicken Tacos".

**Steps:**
1. Start the backend server using `node server.js`.
2. Send a GET request to `http://localhost:5001/api/recipes`. 
3. Check the HTTP response and verify that the saved "Chicken Tacos" recipe appears in the returned recipes list. 

**Expected result:** The server returns a successful HTTP 200 response. The saved "Chicken Tacos" recipe appears in the returned recipes list. 
**Actual result:** HTTP 200 response was returned. The "Chicken Tacos" recipe appeared in the returned recipes list. 
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** GE-02
**From Part 6:** New
**Written by:** Gabriel E
**Title:** Server registers a new account
**Traces to:** REQ-GE-02
**Test type:** Integration
**Preconditions:** Backend server is running and connected to MongoDB. The test email address is not already registered. 
**Test data:** Valid email: vvtest2026@example.com; Password: TestPassword123!

**Steps:**
1. Start the backend server using `node server.js`.
2. Send a POST request to `http://localhost:5001/api/register` with valid email and password credentials in the JSON request body. 
3. Check the HTTP response and verify that the account was successfully created. 

**Expected result:** The server returns HTTP 201 and a success message indicating that the user account was created. 
**Actual result:** HTTP 201 response was returned. The success message appeared, and the new user's ID and email were included in the response. 
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** GE-03
**From Part 6:** New
**Written by:** Gabriel E
**Title:** Server authenticates an existing user and returns a JSON Web Token.
**Traces to:** REQ-GE-03
**Test type:** Integration
**Preconditions:** Backend server is running and connected to MongoDB. A user account with valid login credentials exists. 
**Test data:** Valid credentials for the test account. 

**Steps:**
1. Start the backend server using `node server.js`. 
2. Send a POST request to `http://localhost:5001/api/login` with valid email and password credentials in the JSON request body. 
3. Check the HTTP response and verify that a JSON Web Token and user information are returned. 

**Expected result:** The server returns HTTP 200 with a success message, authentication token, and user details in JSON format. 
**Actual result:** The server returned HTTP 200 with a successful login message, JSON Web Token, and the user's information. 
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** GE-04
**From Part 6:** CR-1
**Written by:** Gabriel E
**Title:** Server allows API requests from approved local development ports 
**Traces to:** NFR-GE-01
**Test type:** Negative
**Preconditions:** Backend server is running and connected to MongoDB. 
**Test data:**
- Approved origin: `http://localhost:3000`
- Expected approved origin: `http://localhost:3001`

**Steps:**
1. Start the backend server using `node server.js`
2. Send a GET request to `http://localhost:5001/api/recipes` using the origin `http://localhost:3000`.
3. Check that the response includes the  `Access-Control-Allow-Origin` header for `http:localhost:3000`. 
4. Send another GET request to the same endpoint using the origin `http://localhost:3001`. 
5. Check that the response includes the `Access-Control-Allow-Origin` header for `http://localhost:3001`. 

**Expected result:** The server returns HTTP 200 and includes the `Access-Control-Allow-Origin` header for both approved local development origins. 
**Actual result:** The server returned HTTP 200 and included the CORS header for `http://localhost:3000`. However, the server did not include the CORS header when the request came from `http://localhost:3001`, even though it returned HTTP 200. 
**Status:** Fail
**Severity:** Medium 
**V or V:** Verification
**GitHub Issue:** #136

---

**Test ID:** GE-05
**From Part 6:** New
**Written by:** Gabriel E
**Title:** User can view a recipe after submitting it. 
**Traces to:** G-GE-01
**Test type:** Acceptance
**Preconditions:** 
- PantryPal client and backend are running. 
- Backend is connected to the recipe database. 
- User can access the Upload Recipe form and submitted recipes section. 
**Test data:** 
- Username: Gabriel
- Recipe name: Garlic Butter Chicken 
- Ingredients: chicken breast, garlic, butter
-Instructions: Season chicken, cook in a pan with butter and garlic until fully cooked. 

**Steps:**
1. Open PantryPal in the browser. 
2. Navigate to the Upload Recipe Page. 
3. Enter Gabriel as the username. 
4. Enter Garlic Butter Chicken as the recipe name. 
5. Enter chicken breast, garlic, and butter as the ingredients. 
6. Enter the cooking instructions. 
7. Click Submit Recipe. 
8. Navigate to the submitted recipes section. 
9. Locate Garlic Butter Chicken. 
10. Verify that the recipe appears with the submitted information. 

**Expected result:** The recipe is successfully submitted and appears in the submitted recipes section with the correct name and information. 
**Actual result:** The Butter Chicken recipe was successfully submitted and appeared in the submitted recipes section with the correct informaton. 
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** GE-06
**From Part 6:** New
**Written by:** Gabriel E
**Title:** Server rejects registration with an invalid email format. 
**Traces to:** REQ-GE-04
**Test type:** Negative 

**Preconditions:** 
1. Backend server is running using `node server.js`.
2. Backend is connected to MongoDB.

**Test data:** Email: `gabrielnotanemail`; Password: `TestPassword123!`

**Steps:**
1. Start the backend server using `node server.js`.
2. Send a POST request to `http://localhost:5001/api/register` with an invalid email and valid password in the JSON request body. 
3. Check the HTTP response and verify that the account was not created. 

**Expected result:** The server rejects the invalid email format and returns HTTP 400 Bad Request. No account is created. 
**Actual result:** The server returned a successful response with the message "Account created." and created a user with the email `gabrielnotanemail`. 
**Status:** Fail
**Severity:** Medium
**V or V:** Validation
**GitHub Issue:** #139

---

**Test ID:** GE-07
**From Part 6:** New
**Written by:** Gabriel E
**Title:** Recipe name contains only whitespace.
**Traces to:** REQ-GE-05
**Test type:** Boundary

**Preconditions:**
1. Backend server is running using `node server.js`.
2. Backend is connected to MongoDB.

**Test data:** Username: `gabriel`; Recipe Name: `"   "` (three spaces)

**Steps:**
1. Start the backend server using `node server.js`.
2. Send a POST request to `http://localhost:5001/api/recipes` with a username and a recipe name containing only three spaces. 
3. Check the HTTP response and verify that the recipe is rejected.  

**Expected result:** The API should reject a recipe name containing only spaces and return HTTP 400 Bad Request. The recipe should not be saved. 
**Actual result:** The API returned an HTTP 500 Internal Server Error with the message "Recipe NOT saved successfully :(". The recipe was not saved. 
**Status:** Fail
**Severity:** Medium
**V or V:** Validation
**GitHub Issue:** #140 