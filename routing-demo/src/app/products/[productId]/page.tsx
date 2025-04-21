import { Metadata } from "next";

type Props = {
    params:Promise<{productId: string}>
}

export const generateMetadata = async({
    params,
}:Props):Promise<Metadata>=>{
    const id = (await params).productId;
    const title = await new Promise((resolve)=>{
        setTimeout(()=>{
         resolve(`Android ${id}`)   
        },100)
    })
    return {
        title:`Product ${title}`
    }
}

export default async function ProductDetails({ params}: Props) {
    const productId = (await params).productId;
    return <h1>Details of the Product {productId}</h1>
}

//Note: You can't use both generateMetadata and Metadata Object in the same routing!!!!!
//And it won't work in the pages mentioned as "use client";