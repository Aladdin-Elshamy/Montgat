interface IProps {
    src:string
    alt:string
    className:string
}
export default function Image({src,alt,className}:IProps) {
    return (
        <img src={src} alt={alt} className={className} />
    )
}