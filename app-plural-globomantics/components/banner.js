import styles from "./banner.module.css";

const Banner = ({ children }) => {
    const logo = { height: "150px" };

    return (
        <header className="row mb-4">
            <div className="col-5">
                {/* <img src="/logo-globomantics.png" alt="Globomantics Logo" style={logo} /> */}
                <img src="/logo-globomantics.png" alt="Globomantics Logo" style={{ height: "150px" }} />
            </div>
            <div className="col-7 mt-5">{children}</div>
        </header>
    );
}

export default Banner;