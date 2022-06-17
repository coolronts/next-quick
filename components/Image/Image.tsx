type props = {
    src: string,
    alt?: string,
    width?: string,
    height?: string,
}
export const Image: React.FC<props> = ({src, width="120px", height="120px", alt="picture"}) => { 
    return (
        <div className="logo">
            <img src={src} width={width} height={height} alt={alt} />
        </div>
    );
}