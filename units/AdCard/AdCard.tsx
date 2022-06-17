import IFrame from "../../components/Iframe/Iframe";
import {Image} from "../../components/Image/Image";
import styles from "./AdCard.module.css";

type props = {
    videoSrc?: string;
    imgSrc?: string;
    alt: string;
    width?: string;
    height?: string;
    title?: string;
}

const AdCard: React.FC<props> = ({ title, videoSrc, imgSrc, alt, width, height}) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            {videoSrc && <div className={styles.iframe}>
                <IFrame src={videoSrc} width={width} height={height} alt={alt} title={title} />
            </div>}
            {imgSrc && <div className={styles.image}>
                <Image src={imgSrc} alt={alt} width={width} height={height}/>
            </div>}
        </div>
    );
}

export default AdCard;