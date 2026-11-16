# Testable Requirements: PantryPal

**Team number:** 12
**Inherited from:** Team 11

## Who Owns What

| Area of the system | Owner | ID prefix |
|---|---|---|
| [example: Accounts and login] | [name] | [initials, like MG] |
| Recipe Upload (form and post /api/recipes) | Ubaydulla Noorullah | UN |
| | | |
| | | |

<!--
RULES
- Only edit YOUR OWN section below. This keeps merge conflicts away.
- Categories: G = Stakeholder Goal, REQ = Functional, NFR = Non-Functional.
- "From Part 5": write the original CR ID and its text from SYSTEM_MAP.md. Write "New" if you added it this sprint.
- Status: Confirmed or Suspected bug. No Unconfirmed allowed. Every Suspected bug needs a GitHub Issue.
- The test: could a stranger write a Pass or Fail test without asking you a question?
-->

---

## Section: Recipe Upload (Ubaydulla Noorullah)

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-UN-01 | Home Cook | Add their own recipe to PantryPal so other users can find it by searching for the ingredients they have. |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-UN-01 | The system shall save the recipe named "Alfredo Pasta"  when a user submits a recipe named "Alfredo Pasta".  | Suspected Bug | CR-2 (Suspected Bug): The system shall save the recipe name submitted by a user.|
| REQ-UN-02 | The system shall save the ingredients "pasta" and "alfredo sauce" when a user submits a recipe with those ingredients. | Suspected Bug | CR-6 (Suspected Bug): The system shall save the ingredients submitted with a recipe. |
| REQ-UN-03 | The system shall save only one "Alfredo Pasta" recipe when a user double-clicks Submit Recipe. |  Suspected Bug | CR-5 (Suspected Bug): The system shall save only one recipe when the same submission is sent twice |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-UN-01 | The "Alfredo Pasta" recipe shall appear in the recipe list within 2 seconds of submitting, with under 50 recipes in the database. | Confirmed | New |

### Example of a Good Rewrite

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-MG-01 | The system shall reject a profile bio longer than 280 characters with the error "Bio must be 280 characters or fewer." | Suspected bug | CR-3 (Unconfirmed): The system shall limit the bio to 280 characters. |
| NFR-MG-01 | The profile page loads in under 2 seconds with 100 profiles in the database. | Confirmed | New |

---

## Section: Ingredient Search & Matching (Deandre Chandler)

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-DC-01 | Home Cook | Find a recipe they can make right now with the few ingredients they have on hand, and see what, if anything, they still need to buy. |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-DC-01 | When "Your Ingredients" contains `eggs`, "Recipes You Can Make" shall list every recipe that has at least one ingredient equal to `eggs` after ignoring capitalization and leading/trailing spaces (for example `EGGS` or ` Eggs `), and shall not list any recipe with zero matching ingredients. | Confirmed | CR-3 (Confirmed): The system shall return recipes that contain at least one exact ingredient match. |
| REQ-DC-02 | When the user adds an ingredient that is already in "Your Ingredients" (ignoring capitalization and leading/trailing spaces, for example adding `Eggs` when `eggs` is listed), the list shall still contain exactly one entry for that ingredient. | Suspected bug | New (from SYSTEM_MAP Part 4, Question 2) |
| REQ-DC-03 | "Recipes You Can Make" shall list matching recipes in descending order of matched-ingredient count, so a recipe matching 2 of the user's ingredients appears above a recipe matching 1. | Confirmed | New |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-DC-01 | After the user clicks Add (or presses Enter) on an ingredient, the "Recipes You Can Make" section shall update within 1 second, with the recipes already loaded from the server. | Confirmed | New |

---

## Section: [Your Area] ([Your Name])

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| | | |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |

---

## Section: [Your Area] ([Your Name])

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| | | |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |
