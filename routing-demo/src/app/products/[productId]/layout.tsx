export default function ProductDetailsLayout({
    children
}:{
    children:React.ReactNode
}
){
    return(
        <>
        {children}
        <h2>Featured  Products</h2>
        </>
    )
}

// over this exercise we will able to understand how the Next or React Component targets the Children 
// based on the respective invocations.

// way of rendering
// goes to the parent layout.tsx file while initialized 
// renders the Header and footer and jumps into the children props

// It is the very way of happening but when it jumps into the specific folders(for ex: here in product folder)
// It starts understanding the new Invocation of the layout.tsx file for that particular segment.
// Basically it renders as the sandwich between Header and Footer.

//Pros: It helps with creating different layouts for our application based on our application needs.

// But what if we want an more focused page like with Header and Footer (eg: Login and Forgot password page).
// Will see them in the next learning part of Multiple root layouts.
