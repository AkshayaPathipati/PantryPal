# PR4 Team Report

**Team Number:** 12

**Team Members:** Rory Campbell, Gabe Elias, Deandre Chandler, Ubaydulla Noorulla

---

## 1. Bug Triage Table

| Test name | Bucket | Issue link | Severity | Priority | Owner | Status |
|---|---|---|---|---|---|---|
| Search with one spelling error: `tomato sause` should match `tomato sauce` | Code bug | [Issue #128](https://github.com/AkshayaPathipati/PantryPal/issues/128) | Medium | High | Rory Campbell | Fixed |
| Delete a submitted recipe after confirmation | Missing feature | [Issue #145](https://github.com/AkshayaPathipati/PantryPal/issues/145) | Medium | Medium | Rory Campbell | Fixed |
| `App.test.js` expects the old “Learn React” link | Test bug | [Issue #150](https://github.com/AkshayaPathipati/PantryPal/issues/150) | Low | Low | Rory Campbell | Fixed |

### Triage Notes

The spelling-error search test was classified as a code bug because the test correctly represented the requirement, but the original search code only used exact ingredient matching. The search logic was updated to allow a one-character spelling difference.

Recipe deletion was classified as a missing feature because the original application did not include a Delete Recipe button or a backend delete endpoint. The feature was implemented with a confirmation dialog, frontend DELETE request, backend delete route, and refreshed recipe list.

The original `App.test.js` was classified as a test bug because it expected the default Create React App “Learn React” link. PantryPal no longer contains that link, so the test was updated to check for the PantryPal heading.

---

## 2. Regression Log

### Regression Results

**No regressions found.**

The full test suite was run on:

- 11/17/2026
- 11/22/2026

The command used was:

```bash
cd client
npm test -- --watchAll=false --runInBand
```

Final regression result:

```text
Test Suites: 2 passed, 2 total
Tests:       7 passed, 7 total
```

No old tests broke after the spelling-search fix, recipe-deletion work, or App test correction.

---

## 3. Final Test Run

![Final test run](screenshots/final_test_run.png)

The final full test suite was run from the `client` directory using:

```bash
npm test -- --watchAll=false --runInBand
```

### Final Results

```text
Test Suites: 2 passed, 2 total
Tests:       7 passed, 7 total
```

### Remaining Failing Tests

No frontend tests remain failing in the final test run.

Backend integration testing was not completed because the team did not have the required MongoDB connection information or access to the Render deployment.

---

## 4. Feature Decision

**Chosen feature:** Recipe image uploading and display

**Feature Issue:** [Issue #145](https://github.com/AkshayaPathipati/PantryPal/issues/145)

### User Story

As a PantryPal user, I want to upload an image with my recipe, so that I can identify and preview recipes visually.

### Why We Chose This Feature

The team chose recipe image uploading because it was identified as a missing feature during Sprint 4 testing. The current application supports recipe names, ingredients, and instructions, but it does not allow users to attach images to recipes. This feature was also included in the inherited project requirements and would make browsing submitted recipes easier in the next sprint.

### Ownership

- **Frontend:** Deandre Chandler
- **Backend/database:** Rory Campbell
- **Testing:** Gabe Elias
- **Documentation:** Ubaydulla Noorulla
- **Code review:** Team

### Acceptance Test Cases

1. **Upload a valid recipe image**

   - Open the recipe submission form.
   - Enter a username, recipe name, ingredients, and instructions.
   - Select a valid image file.
   - Submit the recipe.
   - Verify that the recipe saves successfully with an image reference.
   - Verify that the uploaded image appears on the submitted recipe card.

2. **Reject an invalid image file**

   - Open the recipe submission form.
   - Select a non-image file or an image larger than the allowed size.
   - Submit the recipe.
   - Verify that the application displays a clear error message.
   - Verify that the recipe is not saved with an invalid image reference.

---

## 5. Board Snapshot

![Board snapshot](screenshots/board.png)

---

## 6. Sprint Summary

