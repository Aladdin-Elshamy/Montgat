import { IProduct } from "../interfaces"
import { textSlicer } from "../utilites"
import Button from "./ui/Button"
import Image from "./ui/Image"

interface IProps {
    product: IProduct
}
export default function ProductCard({product}:IProps) {
    console.log(product)
    return (
        <div className="border-2 rounded-lg">
            <div className="p-2 flex flex-col gap-4">
                <Image src={product.imageURL} className="h-48 object-cover rounded-md" alt={product.title} />
                <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
                <p className="text-gray-900 h-20">{textSlicer(product.description,100)}</p>
                <p className="text-gray-900 text-xl">${product.price}</p>
                <div className="flex gap-2">
                    <Button className="bg-indigo-800">Edit</Button>
                    <Button className="bg-red-700">Remove</Button>
                </div>
            </div>
        </div>
    )
}