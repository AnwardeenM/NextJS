function BarChart(){
    return <h1>Bar Chart Data!</h1>
}

export default function Dashboard(){
    return<h1>Dashboard Page Section!</h1>
}

// As an process of understanding the File Location we have just added an BarChart function Component,
// in the page.tsx file. 
// Response:"Runtime Error"; in the window;

// Because the NextJs will always look for an react component written as Default Function(Eg.Other Page.tsx files);

// Step2: Will add the default React Component and see the results.
// And that's how the File coloaction helps us accidently with not mentioning an component as route. 