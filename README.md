Akshaya
Oliver
Raquel
Katie
Steps to Open PantryPal in your PC:

Step 1: Install and Verify the Required Software
Before downloading PantryPal, install Git, Node.js, and Visual Studio Code.
1. Install Git
Open https://git-scm.com/downloads.
Download the version for your operating system.
Run the installer and follow the installation instructions.
Git allows you to download the project from GitHub and manage changes to the code.
2. Install Node.js
Open https://nodejs.org/en.
Download the LTS version.
Run the installer and follow the instructions. Keep the default options unless you have a reason to change them.
Node.js allows you to run JavaScript tools, and npm, which comes with Node.js, installs the packages PantryPal needs.
3. Install Visual Studio Code
Open https://code.visualstudio.com/.
Download and install Visual Studio Code.
VS Code is recommended for opening, viewing, and editing the PantryPal source code.
4. Open a terminal
On Windows:
Press the Windows key.
Search for PowerShell.
Open Windows PowerShell.
Alternatively, open Visual Studio Code, select Terminal → New Terminal, and use the terminal panel at the bottom.
5. Verify that Git is installed
Type the following command and press Enter:
git --version
You should see a version number, such as:
git version 2.x.x
The exact version may be different. If you see a message saying that Git is not recognized, install Git and reopen the terminal.
6. Verify that Node.js is installed
Type:
node --version
You should see a version number beginning with v, such as v22.x.x or another supported LTS version.
7. Verify that npm is installed
Type:
npm --version
You should see a version number. npm is installed with Node.js and will be used to install PantryPal's dependencies.
If all three commands display version numbers, continue to Step 2.
Step 2: Download PantryPal from GitHub
1. Copy the repository URL
Open the PantryPal repository on GitHub in your web browser.
Click the green Code button.
Select HTTPS.
Click the copy icon next to the repository URL.
The URL should look similar to this:
https://github.com/AkshayaPathipati/PantryPal.git
Use the actual URL from your team's repository, not the example above.
2. Open PowerShell or the VS Code terminal
Choose a folder where you want to save the project. For example, to use your Windows user's Documents folder, enter:
cd "$HOME\Documents"
Press Enter.
The cd command means "change directory." It moves the terminal into the folder you specify. You can use another folder if you prefer, but make sure it already exists.
To see which folder you are currently in, run:
pwd
The terminal displays the current folder path.
Step 3: Open PantryPal in Visual Studio Code
After cloning the repository and entering the main PantryPal folder, run this command in the terminal:
code .
The code . command opens the current folder in Visual Studio Code.
If the command does not work, open Visual Studio Code manually:
Select File → Open Folder.
Find the folder where you cloned PantryPal.
Select the main PantryPal folder.
Click Select Folder.
You should now see the project files and folders in the Explorer panel on the left side of VS Code.
Step 4: Open the Frontend Directory
In Visual Studio Code, open the terminal by selecting Terminal → New Terminal from the top menu.
The terminal will appear at the bottom of the window. Make sure it is located in the main PantryPal folder.
Type the following command and press Enter:
cd client
The cd client command moves the terminal into the client folder, which contains the React frontend application.
Your terminal path should now end with something similar to:
PantryPal\client>
To confirm that you are in the correct directory, run:
dir
You should see files and folders such as package.json, package-lock.json, public, and src.
Step 5: Install the Frontend Dependencies
Make sure your terminal is still inside the client folder.
Run:
npm install
Press Enter and wait for the installation to finish.
This command reads the package.json file and installs React and the other packages required by the frontend application.
The first installation may take several minutes. You may see progress messages, warnings, or vulnerability reports. Warnings do not necessarily mean that the installation failed.
When the command finishes and the terminal prompt returns, continue to Step 6.
Step 6: Start the PantryPal Web Application
Make sure you are still inside the client folder.
Run:
npm start
Press Enter.
This command starts the React development server. Wait for the startup process to finish.
What you should see when it works:
The terminal displays a message indicating that the application has compiled successfully or that the development server has started.
Your web browser should open automatically.
PantryPal should be available at:
http://localhost:3000
If your browser does not open automatically, copy the URL above into your browser.
Keep the terminal running while you use the application. Closing the terminal or stopping the process will stop the development server.
Step 7: Verify the Application
Once PantryPal opens in your browser, check that:
The webapp loads.
The available recipe features are displayed.
You can access the recipe upload page.
The available input fields respond when you interact with them.
Some features, such as saving or retrieving recipes, may require the backend server and database to be configured and running separately.
