import Banner from "/components/banner";
import HouseList from "./houseList";
import House from "./house";
import { useState } from "react";

const App = () => {

    const [currentHouse, setCurrentHouse] = useState();

    return (
        <>
            <Banner>
                <div>Provides houses all over the world</div>
            </Banner>
            {currentHouse ?
                (<House house={currentHouse} />)
                :
                (<HouseList setCurrentHouse={setCurrentHouse} />)}
        </>
    );
}

export default App;