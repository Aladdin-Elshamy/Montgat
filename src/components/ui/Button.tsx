import { ReactNode, ButtonHTMLAttributes, memo } from "react"
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className:string
    width?: "w-full" | "w-fit"
}
function Button({children,className,width="w-full",...rest}:IProps) {
    return (
        <button className={`${className} ${width} text-white font-semibold p-3 text-md rounded-md`} {...rest}>{children}</button>
    )
}

export default memo(Button)