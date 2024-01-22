import { useContext, useEffect, useState } from "react";
import HouseRow from "./houseRow";
import { navContext } from "./app";

const HouseList = () => {

    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch("api/houses");
            const houses = await response.json();
            setHouses(houses);
        }

        fetchHouses();
    }, []);

    const addHouse = () => {
        const newHouse = { id: 104, address: '777 Paramount Ct', location: 'New York', price: 1340800 }

        setHouses([...houses, newHouse]);
    };

    const currentTab = useContext(navContext);
    console.log(`currentTab = ${currentTab}`);

    return (
        <>
            <div className="row mb-2">
                <h5 className="theme-color text-center">Houses currently on the market</h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Location</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((house) => (
                        // Note that the key prop is set on the HouseRow instead of on the <tr> inside HouseRow
                        <HouseRow key={house.id} house={house} />
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>Add</button>
        </>
    );
};

export default HouseList;