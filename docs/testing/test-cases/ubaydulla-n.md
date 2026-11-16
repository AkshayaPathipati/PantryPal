# Test Cases: Ubaydulla Noorullah

**Team number:** 12
**My area:** Recipe Upload (form and post /api/recipes)

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

**Test ID: ** UN-01
**From Part 6:** New
**Written by:** Ubaydulla N
**Title:** Recipe name is saved after submitting the upload form
**Traces to:** REQ-UN-01
**Test type:** System
**Preconditions:** Client and server are running locally and connected to MongoDB.
**Test data:** Username "Ubay", recipe name "Alfredo Pasta", ingredients "pasta" and "alfredo sauce", instructions "Boil pasta and add sauce" 

**Steps:**
1. Open the Upload Page.
2. Fill in the form with the test data and click Submit Recipe.
3. Open GET /api/recipes in the browser and look for the new recipe. 

**Expected result:** A recipe named "Alfredo Pasta" is in the list.
**Actual result:**
**Status:** (Pass / Fail)
**Severity:** (Critical / Major / Minor, Fail only)
**V or V:** (Verification / Validation, Fail only)
**GitHub Issue:** (#number, Fail only)

---

**Test ID:** UN-02
**From Part 6:** New
**Written by:** Ubaydulla N
**Title:** Ingredients are saved with the recipe
**Traces to:** REQ-UN-02
**Test type:** Integration
**Preconditions:** Client and server are running locally and connected to MogoDB.
**Test data:** Same as UN-01

**Steps:**
1. Submit the "Alfredo Pasta" recipe through the Upload form.
2. Open GET /api/recipes in the browser.
3. Find "Alfredo Pasta" and check its ingredients field.

**Expected result:** The recipes ingredients are "pasta" and "alfredo sauce".
**Actual result:**
**Status:**
**Severity:**
**V or V:**
**GitHub Issue:**

---

**Test ID:** UN-03
**From Part 6:** New
**Written by:** Ubaydulla N
**Title:** Double clicking Submit does not create a duplicate recipe.
**Traces to:** REQ-UN-03
**Test type:** Negative
**Preconditions:** Client and server are running locally. No "Alfredo Pasta" recipe exists yet.
**Test data:** same as UN-01

**Steps:**
1. Fill in the Upload form with the test data.
2. Double click Submit Recipe quickly.
3. Open GET /api/recipes and count how many "Alfredo Pasta" recipes there are.

**Expected result:** There is exactly one "Alfredo Pasta" recipe.
**Actual result:**
**Status:**
**Severity:**
**V or V:**
**GitHub Issue:**

---

**Test ID:** UN-04
**From Part 6:** New
**Written by:** Ubaydulla N
**Title:** Home cook adds a recipe and other users can find it by ingredient.
**Traces to:** G-UN-01, NFR-UN-01
**Test type:** Acceptance
**Preconditions:** Client and server are running locally. Fewer than 50 recipes in the database.
**Test data:** Same as UN-01

**Steps:**
1. Submit the "Alfredo Pasta" recipe through the Upload form and start a timer.
2. Check that the recipe shows up in the recipe list, and stop the timer.
3. Search for the ingredient "pasta".

**Expected result:** "Alfredo Pasta" shows up in the list within 2 seconds and appears in the search results for "pasta".
**Actual result:**
**Status:**
**Severity:**
**V or V:**
**GitHub Issue:**

---
