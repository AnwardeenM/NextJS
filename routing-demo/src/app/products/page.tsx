import Link from "next/link";

export default function Products(){
    const productId =99; 
    return (
        <>
        <Link href="/">Home</Link>
        <h1>Product List</h1>
        <h2><Link href="/products/1">Product 1</Link></h2>
        <h2><Link href="/products/2">Product 2</Link></h2>
        <h2><Link href="/products/3" replace>Product 3</Link></h2>
        <h2><Link href={`/products/${productId}`}>Product {productId}</Link></h2> 
        </>
    )

}

//This code contains the example of static and dynamic navigation using UI
//replace is one of the features of next link, where you can write an navigation to different place.