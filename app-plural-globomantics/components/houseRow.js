// In the props below, notice the {} that is enclosing the house prop. It is important, otherwise house will be undefined and the rows will be empty.

const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
});

const HouseRow = ({ house }) => {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.location}</td>
            <td>{currencyFormatter.format((house.price))}</td>
        </tr>
    );
};

export default HouseRow;