import styles from "./banner.module.css";

const Banner = ({ children }) => {
    // const logoVar = { height: "300px" };

    return (
        <header className="row mb-4">
            <div className="col-5">
                {/* <img src="/logo-globomantics.png" style={logoVar} alt="Globomantics Logo" alt="Globomantics Logo" /> */}
                {/* <img src="/logo-globomantics.png" style={{ height: "200px"}} alt="Globomantics Logo" /> */}
                <img src="/logo-globomantics.png" className={styles.logo} alt="Globomantics logo" />
            </div>
            <div className={`${styles.title} theme-color col-7 mt-5`}>{children}</div>
        </header>
    );
}

export default Banner;