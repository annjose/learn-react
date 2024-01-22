import Banner from "/components/banner";
import HouseList from "./houseList";
import House from "./house";

import React, { useCallback, useState } from "react";

const navContext = React.createContext("Home");

const App = () => {

    // this is the simple version of the navigate method. To be safer, wrap this in useCallback hook as below
    // const navigate = (newTab) => {
    //     setNav({ currentTab: newTab, navCallback: navigate });
    // };

    const navigate = useCallback(
        (newTab, house) => setNav({ currentTab: newTab, house: house, navCallback: navigate }),
        []
    );

    const [nav, setNav] = useState({ currentTab: "List", house: null, navCallback: navigate });

    const MainComponent = ({ currentTab, currentHouse }) => {
        switch (currentTab) {
            case "List":
                return <HouseList />;
            case "Details":
                return <House house={currentHouse} />;
            default:
                return <h3>Unknown nav tab {nav.currentTab}</h3>;
        }
    };

    return (
        <navContext.Provider value={nav}>
            <Banner>
                <div>Provides houses all over the world</div>
            </Banner>
            <a href="#" onClick={() => { navigate("List") }}>Home</a>
            <MainComponent currentTab={nav.currentTab} currentHouse={nav.house} />
        </navContext.Provider>
    );
}

export { navContext };
export default App;