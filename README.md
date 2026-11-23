README LINK: https://docs.google.com/document/d/1lUQ1_SxFA215QvHLcN70bD1KsB9H0QNCTZSguTy60SQ/edit?usp=sharing


## How to run the tests

1. Install Node.js (version 18 or newer) from https://nodejs.org.
2. Clone the repo and go into the client folder:
   ```bash
   git clone https://github.com/AkshayaPathipati/PantryPal.git
   cd PantryPal/client
   ```
3. Install the packages:
   ```bash
   npm install
   ```
4. Run every test once:
   ```bash
   npm test -- --watchAll=false --runInBand
   ```
5. You should see 5 test suites and 14 tests pass.

To run just one test file, add its name to the end, for example:
```bash
npm test -- --watchAll=false UploadEdgeCases
```
