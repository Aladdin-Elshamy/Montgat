import { InputHTMLAttributes } from "react"
interface IProps extends InputHTMLAttributes<HTMLInputElement> {}
export default function index({...rest}:IProps) {
    return (
        <input {...rest}/>
    )
}