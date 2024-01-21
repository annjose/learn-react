import currencyFormatter from "@/utils/currencyFormatter";

// In the props below, notice the {} that is enclosing the house prop. It is important, otherwise house will be undefined and the rows will be empty.

const HouseRow = ({ house, setCurrentHouse }) => {
    /*let priceTd;
    if (house.price >= 1_000_000) {
        priceTd = <td className="text-primary">{currencyFormatter.format((house.price))}</td>
    } else {
        priceTd = <td>{currencyFormatter.format((house.price))}</td>
    }*/

    return (
        <tr onClick={() => setCurrentHouse(house)}>
            <td>{house.address}</td>
            <td>{house.location}</td>
            {/* {priceTd} */}

            {house.price &&
                <td className={`${house.price >= 1_000_000 ? "text-primary" : ""}`}>{currencyFormatter.format((house.price))}</td>
            }
        </tr>
    );
};

export default HouseRow;