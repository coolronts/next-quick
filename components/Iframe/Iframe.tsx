type props = {
    src: string;
    alt: string;
    width?: string;
    height?: string;
    title?: string;
}


const IFrame: React.FC<props> = ({ title, src, alt, width, height}) => {
    return (
        <iframe title={title} src={src} width={width} height={height} />
    );
    }

export default IFrame;