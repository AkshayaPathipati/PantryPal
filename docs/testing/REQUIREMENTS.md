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

---

## Section: Server & API Configuration (Gabriel Elias)

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-GE-01 | PantryPal user | Find recipes using available ingredients and upload or view recipes through the application. |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-GE-01 | The server shall return a list of saved recipes when a client sends a GET request to /api/recipes. | Confirmed | New |
| REQ-GE-02 | The server shall create a user account and return HTTP 201 when valid registration credentials are submitted. | Confirmed | New |
| REQ-GE-03 | The server shall authenticate a user and return a JSON Web Token when valid login credentials are submitted. | Confirmed | New |
| REQ-GE-04 | The server shall reject registration attempts containing improperly formatted email addresses. | Unconfirmed | New |
| REQ-GE-05 | The server shall reject recipe submissions with a whitespace-only recipe name and return HTTP 400 Bad Request. | Unconfirmed | New |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-GE-01 | The server shall respond to API requests from approved client origins without CORS errors. | Unconfirmed | CR-1 |