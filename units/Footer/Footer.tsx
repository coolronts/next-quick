import styles from './Footer.module.css';

type props = {

}

const Footer: React.FC<props> = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <a href="#">
                       Om oss
                    </a>
                    <a href="#">
                        Kontakt
                    </a>
                    <a href="#">
                        Om oss
                    </a>
                    <a href="#">
                        <span>Kontakt</span>
                    </a>
                </div>
                <div className={styles.social}>
                    <a href="#">
                        <span>Facebook</span>
                    </a>
                    <a href="#">
                        <span>Instagram</span>
                    </a>
                    <a href="#">
                        <span>Twitter</span>
                    </a>
                </div>
                <div className={styles.copyright}>
                    <span>© 2020 Zahid Ronty</span>
                </div>
                <div className={styles.logo}>
                    <img src="https://via.placeholder.com/100x100" alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default Footer;