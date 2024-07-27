import { ReactNode } from "react"
interface IProps {
    children: ReactNode
    className:string
    width?: "w-full" | "w-fit"
}
export default function Button({children,className,width="w-full"}:IProps) {
    return (
        <button className={`${className} ${width}`}>{children}</button>
    )
}