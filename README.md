## Instructions
* This project requires Node.js to be installed on your machine
* Unzip the folder to a destination of your choosing
* Open Terminal or Command Prompt, and navigate to the folder's destination (for example - C:\Users\Robert\Desktop\[project_folder])
* Type in the terminal "yarn install" in order to install all the node_modules for the app. If Yarn is not installed globally, type "npm install" instead.
* You can build bundle.js by typing into the terminal "npm run build", or "yarn build" 
* You can run the server off webpack by typing into the terminal "npm run serve" or "yarn serve"
* Open your chosen internet browser, and navigate to "http://localhost:8080"

## Documentation
* I opted to place the entire form in one component, just to ensure that the entire component works in isolation. In the future, I would break down inputs into seperate components, passing their props back up to the parent form in order for onSubmit functioniality to work properly.
* With SCSS, the project can in future have colours/size variables be passed around the variety of components in the application. Also, we can break these down into smaller style sheets, instead of the single styles.scss we have at the moment.
* Adding unit testing would be relatively easy for the form. Isolate tests dedicated to one field each, feeding in valid/invalid values, testing onSubmit, seeing that the error <spans> go away and the classNames of <p> tags changing when an error is resolved
* I originally tried to make a single object for the errors state hook. I opted to go against this once I played around with it, due to constantly passing previousState in order for errors that haven't changed to remain the same
* There is an argument to be made if the animalTypes error state should be an empty array, pushing/popping when values are checked/unchecked. I opted against this due to having to manipulate the DOM directly using getElementByName everytime in order to check what was checked. Instead, having state hooks that detects which values are checked, and then creating a small function to make an array to check its size was satisfactory just to see if the task was successful.