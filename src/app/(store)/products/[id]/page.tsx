import { notFound } from 'next/navigation'
import {mockProducts} from "@/components/lib/constant";
import ProductDetails from "@/components/components/products/product-details";




export default function ProductPage({ params }: { params: { id: string } }) {
    const product = mockProducts.find((p) => p.id === params.id)

    if (!product) {
        notFound()
    }

    return (
        <div className="py-8">
            <ProductDetails product={product} />
        </div>
    )
}