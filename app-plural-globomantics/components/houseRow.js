// In the props below, notice the {} that is enclosing the house prop. It is important, otherwise house will be undefined and the rows will be empty.

const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
});

const HouseRow = ({ house }) => {
    /*let priceTd;
    if (house.price >= 1_000_000) {
        priceTd = <td className="text-primary">{currencyFormatter.format((house.price))}</td>
    } else {
        priceTd = <td>{currencyFormatter.format((house.price))}</td>
    }*/

    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.location}</td>
            {/* {priceTd} */}

            { house.price &&
                <td className={`${house.price >= 1_000_000 ? "text-primary" : ""}`}>{currencyFormatter.format((house.price))}</td>
            }
        </tr>
    );
};

export default HouseRow;