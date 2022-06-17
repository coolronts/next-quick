import {Footer, Header, Navbar} from '../../units';
import SplitScreen, {Left, Right} from '../../layouts/SplitScreen';

import Carousel from '../../components/Carousel/Carousel';
import { NextPage } from 'next';

// import styles from './ProductDetail.module.css';

function Product() {
    
    return (
        <>
            <Header />
            <Navbar />
            <SplitScreen>
               <Left>
                   <h1>Hello</h1>
               </Left>
                <Right>
                    <h1>Product Detail</h1>
                </Right>
            </SplitScreen>
            <Footer />
        </>
    );
}

export default Product;