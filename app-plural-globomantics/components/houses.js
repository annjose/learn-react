
const houses = [
    { id: 101, address: '123 Marvel Street', location: 'San Jose', price: 900000 },
    { id: 102, address: '456 Disney Way', location: 'Cupertino', price: 1200000 },
    { id: 103, address: '222 Century Dr', location: 'Redmond', price: 890000 }
];

// In the props below, notice the {} that is enclosing the house prop. It is important, otherwise house will be undefined and the rows will be empty.
const HouseRow = ({ house }) => {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.location}</td>
            <td>{house.price}</td>
        </tr>
    );
};

const Houses = () => {
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
        </>
    );
};

export default Houses;