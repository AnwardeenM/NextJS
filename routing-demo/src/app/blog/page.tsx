import { Metadata } from "next";

export const metadata:Metadata = {
    title:{
        absolute:"Blog"  //This gives the user to assign absolute title for the pages moving out of an assigned template.
    }
}

export default function Blog(){
    return <h1>My Blog!</h1>
}
