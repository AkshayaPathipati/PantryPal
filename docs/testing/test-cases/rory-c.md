# Test Cases: Rory C

**Team number:** 12
**My area:** Recipe Search and Recipe Media

---

**Test ID:** RC-01  
**From Part 6:** TC-3  
**Written by:** Rory Campbell  
**Title:** Search with a one-letter spelling error  
**Traces to:** REQ-RC-01  
**Test type:** Boundary Value  
**Preconditions:** A recipe exists with "tomato sauce" in its ingredient list.  
**Test data:** Search ingredient: "tomato sause"

**Steps:**
1. Open the PantryPal search page.
2. Enter "tomato sause" as the ingredient.
3. Submit the search.

**Expected result:** The recipe containing "tomato sauce" is returned.  
**Actual result:** No recipe is returned because the system uses exact ingredient matching and does not correct spelling errors.  
**Status:** Fail  
**Severity:** Major  
**V or V:** Validation  
**GitHub Issue:** #128

---

**Test ID:** RC-02  
**From Part 6:** New  
**Written by:** Rory Campbell  
**Title:** Misspelled ingredient does not match an unrelated recipe  
**Traces to:** REQ-RC-01  
**Test type:** Negative  
**Preconditions:** A recipe exists with "avocado" in its ingredient list, and no recipe contains "tomato sauce".  
**Test data:** Search ingredient: "tomato sause"

**Steps:**
1. Open the PantryPal search page.
2. Enter "tomato sause" as the ingredient.
3. Submit the search.

**Expected result:** The avocado recipe is not returned because it is unrelated to the search term.  
**Actual result:** The avocado recipe is not returned.  
**Status:** Pass  
**Severity:**  
**V or V:**  
**GitHub Issue:**

---

**Test ID:** RC-03  
**From Part 6:** New  
**Written by:** Rory Campbell  
**Title:** Upload a recipe with an image  
**Traces to:** REQ-RC-02  
**Test type:** Acceptance  
**Preconditions:** The user has a valid image file named "tomato-pasta.jpg".  
**Test data:** Recipe name: "Tomato Pasta"; ingredient: "tomato sauce"; image: "tomato-pasta.jpg"

**Steps:**
1. Open the recipe upload form.
2. Enter the recipe name and ingredient, and attach "tomato-pasta.jpg".
3. Submit the recipe.

**Expected result:** The recipe is saved with a reference to "tomato-pasta.jpg".  
**Actual result:** The upload form and API do not support an image field, so no media reference is saved.  
**Status:** Fail  
**Severity:** Major  
**V or V:** Validation  
**GitHub Issue:** #129

---

**Test ID:** RC-04  
**From Part 6:** New  
**Written by:** Rory Campbell  
**Title:** Display media for a saved recipe  
**Traces to:** REQ-RC-03  
**Test type:** Integration  
**Preconditions:** A recipe with an associated image has been saved.  
**Test data:** Recipe name: "Pasta"; image: "pasta.jpg"

**Steps:**
1. Retrieve the saved recipes from "GET /api/recipes".
2. Locate the "Pasta" recipe in the response.
3. Check whether the recipe includes and displays its media reference.

**Expected result:** The recipe includes a reference to "pasta.jpg", and the recipe view displays the image.  
**Actual result:** The recipe response contains no media reference because the recipe schema does not include a media field.  
**Status:** Fail  
**Severity:** Major  
**V or V:** Verification  
**GitHub Issue:** #130
