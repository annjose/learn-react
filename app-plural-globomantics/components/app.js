import Houses from "./houses";
import Banner from "/components/banner";

const App = () => {
    return (
        <>
            <Banner>
                <div>Provides houses all over the world</div>
            </Banner>
            <Houses />
        </>
    );
}

export default App;