import { Search } from "../Icons/Icons";
import styles from "./SearchInput.module.css";

const SearchInput: React.FC = () => { 
    return (
        <div className={styles.searchInput}>
            <input type="text" placeholder="Search" />
            <div className={styles.icon}>
                <Search/>
            </div>
        </div>
    );
}

export default SearchInput;

