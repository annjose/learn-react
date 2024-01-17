import HouseList from "./houseList";
import Banner from "/components/banner";

const App = () => {
    return (
        <>
            <Banner>
                <div>Provides houses all over the world</div>
            </Banner>
            <HouseList />
        </>
    );
}

export default App;