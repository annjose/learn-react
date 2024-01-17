import Houses from "./houses";
import Banner from "/components/banner";

const App = () => {
    return (
        <>
            <Banner>
                <strong>Provides houses all over the world.</strong>
            </Banner>
            <Houses />
        </>
    );
}

export default App;