import { Image } from '../Image/Image';
import {Stock} from '../../components/Icons/Icons';
import styles from './ProductCard.module.css';

const ProductCard: React.FC = () => { 
    return (
        <div className= {styles.productCard} >
            <div className={styles.productCard__image}>
                <Image src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" width="100%" height="120px"alt="picture" />
            </div>
                <h3 className={styles.productCard__title}>Product title</h3>
                <div className={styles.productCard__flex } >
                    <div className={styles.productCard__price}>
                        <span className={styles.productCard__priceValue}>$100</span>
                        <span className="productCard__priceCurrency">USD</span>
                    </div>
                    <button className={styles.productCard__addToCart}>Add to cart</button>
                </div>
                </div>
    );
}

export default ProductCard;