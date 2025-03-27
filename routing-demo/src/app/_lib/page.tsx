export default function PrivateRoute(){
    return<h1>This Route cannot be viewed in the browser!</h1>
}

// This is to exercise or understand the PrivateFolders in the NextJs
// To achieve this you just needs to add the "_" to your folder name and the NextJs wont recognize them as a route.
// By doing this you won't be able to see them in localhost:3000/_lib like other files.

// Cons:
// Helps to maintain the consistent way of Organize Files.
// keeping the UI logic separate from the route logic.
// Easier to group related files in the code editor.
// helps avoid naming conflicts.

//HINT: "%5F" is the browser repersentation of "_". It will reflect in the routes if the folder is renamed with "%5F".

// You might simple skip this feature and really on the "File Colocation".