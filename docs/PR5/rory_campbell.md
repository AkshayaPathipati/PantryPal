# Rory Campbell

## PR5 risks

### R2 — File validation does not reject unsafe input

- **Risk (CTC):** Given that the inherited recipe form and API do not yet enforce a shared file type and size policy, then there is concern that a non-image or oversized upload will be accepted, fail during storage, or leave a recipe with a broken media reference.
- **Category:** Technical
- **Probability (P):** 0.60
- **Impact:** 2 — Critical
- **Cost:** 3 days
- **Exposure:** 1.80 days

### R7 — Requirements are interpreted differently by the implementers

- **Risk (CTC):** Given that frontend, backend, database, and requirements work are split across four people, then there is concern that the client and server will implement different field names, validation rules, or failure behavior and require integration rework.
- **Category:** Project
- **Probability (P):** 0.50
- **Impact:** 2 — Critical
- **Cost:** 2 days
- **Exposure:** 1.00 day

## RMMM for owned risk above the cutoff

### R2 — File validation does not reject unsafe input

- **Owner:** Rory Campbell
- **Response:** Mitigate
- **Mitigation:** Before implementation, document JPG, JPEG, PNG, and WebP as the allowed types with a 5 MB maximum; add tests for a valid image, a non-image file, and an oversized image; require the API to return a clear 4xx response without saving a recipe when validation fails.
- **Monitoring / trigger:** A test sends a non-image or oversized file and the API returns success, saves a recipe, or returns an unclear error.
- **Management:** Stop the feature merge, keep the recipe text save separate from the rejected media upload, and open a fix task for the validation or error-response path before release.
- **Status:** Open

## AI disclosure

ChatGPT was used to format this file but all ideas are my own work.
