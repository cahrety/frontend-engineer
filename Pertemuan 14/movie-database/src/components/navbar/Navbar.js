import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
    return (
        <StyledNavbar>
            <nav className={styles.navbar}>
                <div>
                    <h2 className={styles.navbar__brand}>Filmify</h2>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}><Link to="/" className={styles.navbar__link}>Home</Link></li>
                        <li className={styles.navbar__item}><Link to="/movie/create" className={styles.navbar__link}>Add Movie</Link></li>
                        <li className={styles.navbar__item}><Link to="/movie/popular" className={styles.navbar__link}>Popular</Link></li>
                        <li className={styles.navbar__item}><Link to="/movie/now" className={styles.navbar__link}>Now Playing</Link></li>
                        <li className={styles.navbar__item}><Link to="/movie/top" className={styles.navbar__link}>Top Rated</Link></li>
                    </ul>
                </div>
            </nav>
            </StyledNavbar>
    );
}

export default Navbar;