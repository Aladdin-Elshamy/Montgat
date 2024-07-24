import { IProduct } from "../interfaces"

interface IProps {
    product: IProduct
}
export default function ProductCard({product}:IProps) {
    console.log(product)
    return (
        <>ProductCard</>
    )
}