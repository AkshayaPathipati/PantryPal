const bcrypt = require("bcryptjs");
async function testPasswordVerification() {
    const originalPassword = "TestPassword123!";
    const incorrectPassword = "WrongPassword123!";

    // Generate a hash from the original password
    const hashedPassword = await bcrypt.hash(originalPassword, 10);

    // Compare the incorrect password against the hash
    const result = await bcrypt.compare(
        incorrectPassword, 
        hashedPassword,
    );

    if (result == false) {
        console.log("Pass: Incorrect password was rejected.");
    } else {
        console.log("FAIL: Incorrect password was accepted.");
    }
}

testPasswordVerification();