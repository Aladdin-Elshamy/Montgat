interface IProps {
msg:string
}
export default function ErrorMessage({msg}:IProps) {
    return (
        msg ? <p className="block text-red-500 text-sm font-semibold">{msg}</p> : null
    )
}