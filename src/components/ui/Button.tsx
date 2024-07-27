import { ReactNode, ButtonHTMLAttributes } from "react"
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className:string
    width?: "w-full" | "w-fit"
}
export default function Button({children,className,width="w-full",...rest}:IProps) {
    return (
        <button className={`${className} ${width}`} {...rest}>{children}</button>
    )
}