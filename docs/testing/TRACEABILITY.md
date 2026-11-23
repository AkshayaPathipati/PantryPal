# Traceability Matrix

**Team number:** 12
**Filled in by (captain):** Rory Campbell

Fill this in **after** everyone's work is merged. One row per requirement.

## Requirements to Tests

| Requirement ID | From Part 5 | Owner | Test case IDs | Result | GitHub Issue # |
|---|---|---|---|---|---|
| REQ-UN-01 | CR-2 | Ubaydulla Noorullah | UN-01 | 1 Pass | None |
| REQ-UN-02 | CR-6 | Ubaydulla Noorullah | UN-02 | 1 Pass | None |
| REQ-UN-03 | CR-5 | Ubaydulla Noorullah | UN-03 | 1 Fail | #124 |
| NFR-UN-01 | New | Ubaydulla Noorullah | UN-04 | 1 Fail | #125 |
| REQ-RC-01 | CR-4 | Rory Campbell | RC-01, RC-02 | 1 Pass, 1 Fail | #128 |
| REQ-RC-02 | CR-7 | Rory Campbell | RC-03 | 1 Fail | #129 |
| REQ-RC-03 | CR-7 | Rory Campbell | RC-04 | 1 Fail | #130 |
| NFR-RC-01 | New | Rory Campbell | None | Not tested | None |
| REQ-DC-01 | CR-3 | Deandre Chandler | DC-01, DC-02 | 2 Pass | None |
| REQ-DC-02 | New (SYSTEM_MAP Part 4, Question 2) | Deandre Chandler | DC-03 | 1 Fail | #133 |
| REQ-DC-03 | New | Deandre Chandler | DC-05 | 1 Pass | None |
| NFR-DC-01 | New | Deandre Chandler | DC-06 | 1 Pass | None |
| REQ-GE-01 | New | Gabriel Elias | GE-01 | 1 Pass | None |
| REQ-GE-02 | New | Gabriel Elias | GE-02 | 1 Pass | None |
| REQ-GE-03 | New | Gabriel Elias | GE-03 | 1 Pass | None |
| NFR-GE-01 | CR-1 | Gabriel Elias | GE-04 | 1 Fail | #136 |

## Gaps

List any requirement with no test, any test with no requirement, and any Part 5 requirement or Part 6 test that nobody brought over. Write "None" if there are none.

- NFR-RC-01 has no corresponding test case. The requirement is present, but nobody submitted a test for the fallback behavior when recipe media cannot be loaded.
- There are no submitted Unit or Security tests, so those required test-type categories are uncovered.
- All other requirements have at least one test, and all submitted tests trace to a requirement or stakeholder goal.

## Test Type Coverage

Put a Test ID next to each type. Team minimum: all 7.

| Test type | Test ID |
|---|---|
| Unit | None |
| Integration | UN-02, RC-04, GE-01, GE-02, GE-03 |
| System (E2E) | UN-01, DC-01, DC-05, DC-06 |
| Acceptance | UN-04, RC-03, DC-04, GE-05 |
| Boundary Value | RC-01 |
| Negative | UN-03, RC-02, DC-02, GE-04 |
| Security | None |

## Validation Findings

A Validation finding means the system does what the requirement says, but the requirement does not serve the Stakeholder Goal. Remember the alphabetical leaderboard.

| Requirement ID | Goal it fails | Why | Issue # |
|---|---|---|---|
| None | None | No validation findings were identified. The requirements collectively support the stated goals: uploading and finding recipes, matching available ingredients, viewing recipe media, and accessing the application's server features. | None |

**If you found none,** explain in 2 to 3 sentences why every requirement truly serves its Goal:

> Every requirement supports at least one stakeholder goal. The functional requirements define the recipe, search, matching, media, account, and API behaviors needed by PantryPal users, while the non-functional requirements address response time, fallback behavior, and cross-origin access needed for those behaviors to work reliably. No requirement was found that would satisfy its test but fail to contribute to a stated goal.

## Summary

| | Count |
|---|---|
| Part 5 requirements carried over | 8 |
| New requirements added | 8 |
| Part 6 tests upgraded (out of 3) | 3 |
| Total requirements | 16 |
| Total test cases | 19 |
| Passed | 12 |
| Failed | 7 |
| Issues opened | 7 |
| Critical issues | 0 |

**In one sentence, would you ship this system today? Why or why not?**

> No. Seven tests failed, including major issues with duplicate recipe submissions, recipe media, misspelled-ingredient search, and upload response time, so the system is not ready to ship.
