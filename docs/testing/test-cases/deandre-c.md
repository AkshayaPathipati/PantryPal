# Test Cases: Deandre C

**Team number:** 12
**My area:** Ingredient Search & Matching

---

**Test ID:** DC-01
**From Part 6:** TC-1
**Written by:** Deandre Chandler
**Title:** Search matches a recipe ingredient regardless of capitalization
**Traces to:** REQ-DC-01
**Test type:** System
**Preconditions:** PantryPal client running locally (`npm start` in `client/`) and open at `http://localhost:3000`. "Your Ingredients" list is empty. Note: the local client reads and writes the team's shared recipe database, so the uploaded recipe is visible to everyone.
**Test data:**
- Recipe to upload: Username `deandre-test`, Recipe Name `Scrambled Eggs DC`, Ingredients `EGGS`, `PEPPER`, `SALT` (all capitals), Instructions `Whisk eggs, cook, season.`
- Ingredient the user owns: `eggs`

**Steps:**
1. Under "Upload Recipe", enter the test recipe. Add each ingredient with the Add button, then click "Submit Recipe :D" (skip if `Scrambled Eggs DC` already exists under "Show Submitted Recipes")
2. In "What ingredients do you currently own?", type `eggs` and click Add
3. Find the `Scrambled Eggs DC` card under "Recipes You Can Make"

**Expected result:** The `Scrambled Eggs DC` card appears and shows "You have 1 out of 3 ingredients." and "Ingredients you have: eggs".
**Actual result:** The `Scrambled Eggs DC` card appeared under "Recipes You Can Make" and showed "You have 1 out of 3 ingredients.", "Ingredients you have: eggs", and "Ingredients you need: pepper, salt". The recipe was saved with `EGGS`, `PEPPER`, `SALT` in capitals, so the lowercase `eggs` still matched.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** DC-02
**From Part 6:** TC-2
**Written by:** Deandre Chandler
**Title:** Search does not list a recipe when none of its ingredients match
**Traces to:** REQ-DC-01
**Test type:** Negative
**Preconditions:** Same as DC-01.
**Test data:**
- Recipe to upload: Username `deandre-test`, Recipe Name `Peppered Eggs DC`, Ingredients `eggs`, `pepper`, Instructions `Crack eggs, add pepper, cook.`
- Ingredient the user owns: `avocado`

**Steps:**
1. Upload the test recipe through the Upload Recipe form (skip if `Peppered Eggs DC` already exists under "Show Submitted Recipes")
2. In "What ingredients do you currently own?", type `avocado` and click Add
3. Look under "Recipes You Can Make"

**Expected result:** No `Peppered Eggs DC` card appears under "Recipes You Can Make". (If no recipe in the database uses avocado, the section shows "No recipes match your ingredients yet.")
**Actual result:** No `Peppered Eggs DC` card appeared. The section showed "No recipes match your ingredients yet."
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** DC-03
**From Part 6:** New
**Written by:** Deandre Chandler
**Title:** Adding the same ingredient twice with different capitalization creates only one entry
**Traces to:** REQ-DC-02
**Test type:** Negative
**Preconditions:** PantryPal client running locally (`npm start` in `client/`) and open at `http://localhost:3000`. "Your Ingredients" list is empty.
**Test data:**
- First ingredient: `eggs`
- Second ingredient: `Eggs`

**Steps:**
1. In the "What ingredients do you currently own?" box, type `eggs`
2. Click Add
3. Type `Eggs`
4. Click Add
5. Count the entries under "Your Ingredients"

**Expected result:** "Your Ingredients" shows exactly 1 entry for eggs.
**Actual result:** "Your Ingredients" showed 2 entries: `eggs` and `Eggs`. The second Add was not blocked. (The matching recipe cards were not duplicated; each showed "Ingredients you have: eggs" once.)
**Status:** Fail
**Severity:** Minor
**V or V:** Verification
**GitHub Issue:** #133

---

**Test ID:** DC-04
**From Part 6:** New
**Written by:** Deandre Chandler
**Title:** A home cook can see a recipe they can make and what they still need
**Traces to:** G-DC-01
**Test type:** Acceptance
**Preconditions:** PantryPal client running locally and open at `http://localhost:3000`. A recipe exists in the database with the test data below (upload it first through the Upload Recipe form if it does not exist). "Your Ingredients" list is empty.
**Test data:**
- Recipe to upload: Username `deandre-test`, Recipe Name `Cheesy Eggs DC`, Ingredients `eggs`, `cheese`, `butter`, Instructions `Melt butter, scramble eggs, add cheese.`
- Ingredients the user owns: `eggs`, `cheese`

**Steps:**
1. Upload the test recipe through the Upload Recipe form (skip if it already exists)
2. In "What ingredients do you currently own?", add `eggs`
3. Add `cheese`
4. Find the `Cheesy Eggs DC` card under "Recipes You Can Make"

**Expected result:** The `Cheesy Eggs DC` card appears and shows "You have 2 out of 3 ingredients", "Ingredients you have: eggs, cheese", and "Ingredients you need: butter".
**Actual result:** The `Cheesy Eggs DC` card appeared and showed "You have 2 out of 3 ingredients.", "Ingredients you have: eggs, cheese", and "Ingredients you need: butter".
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** DC-05
**From Part 6:** New
**Written by:** Deandre Chandler
**Title:** Recipes with more matched ingredients are listed first
**Traces to:** REQ-DC-03
**Test type:** System
**Preconditions:** Same as DC-01. `Cheesy Eggs DC` from DC-04 has been uploaded.
**Test data:**
- Recipe to upload: Username `deandre-test`, Recipe Name `Plain Eggs DC`, Ingredients `eggs`, `salt`, Instructions `Fry eggs, add salt.` (matches 1 of the user's ingredients)
- Existing recipe: `Cheesy Eggs DC` with `eggs`, `cheese`, `butter` (matches 2)
- Ingredients the user owns: `eggs`, `cheese`

**Steps:**
1. Upload `Plain Eggs DC` through the Upload Recipe form (skip if it already exists under "Show Submitted Recipes")
2. In "What ingredients do you currently own?", add `eggs`
3. Add `cheese`
4. Under "Recipes You Can Make", note the position of the `Cheesy Eggs DC` and `Plain Eggs DC` cards

**Expected result:** `Cheesy Eggs DC` ("You have 2 out of 3 ingredients.") appears above `Plain Eggs DC` ("You have 1 out of 2 ingredients."). Other teams' recipes may appear between them.
**Actual result:** `Cheesy Eggs DC` (2 out of 3) appeared 2nd in the list and `Plain Eggs DC` (1 out of 2) appeared 10th, so Cheesy Eggs DC was above Plain Eggs DC. Every 2-match recipe was listed above every 1-match recipe.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** DC-06
**From Part 6:** New
**Written by:** Deandre Chandler
**Title:** Matching results update within 1 second of adding an ingredient
**Traces to:** NFR-DC-01
**Test type:** System
**Preconditions:** PantryPal client running locally and open at `http://localhost:3000`. Recipes have finished loading (open "Show Submitted Recipes" once to confirm they're not still loading, then hide it). "Your Ingredients" list is empty.
**Test data:**
- Ingredient: `eggs`

**Steps:**
1. Type `eggs` in "What ingredients do you currently own?"
2. Click Add and start a timer at the same moment
3. Stop the timer when "Recipes You Can Make" changes from "Add ingredients above to find matching recipes." to recipe cards (or "No recipes match your ingredients yet.")

**Expected result:** The section updates in under 1 second.
**Actual result:** The section switched from "Add ingredients above to find matching recipes." to recipe cards in 3.5 to 5.3 ms across 5 runs (timed in the browser from the Add click to the section changing). Well under 1 second.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---
