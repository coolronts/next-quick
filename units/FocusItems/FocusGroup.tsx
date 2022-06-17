import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './FocusGroup.module.css';

type props = {
    title: string;
    index: number
}

const FocusGroup: React.FC<props> = ({title, index}) => {
    const number = 5;
    return (
        <div className={styles.wrapper}
            style={{ backgroundColor: index%2 === 0 ? '#FB7945' : '#D3D3D3' }}
        >
            <p className={styles.title}>{title}</p>
            <div className={styles.container}>
                {Array.from(Array(number).keys()).map((item) => {
                    return <ProductCard key={item} />
                })}
            </div>
        </div>
    );
}

export default FocusGroup;