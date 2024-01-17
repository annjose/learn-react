
const houses = [
    { address: '123 Marvel Street', location: 'San Jose', price: 900000 },
    { address: '456 Disney Way', location: 'Cupertino', price: 1200000 },
    { address: '222 Century Dr', location: 'Redmond', price: 890000 }
];

const Houses = () => {
    return (
        <>
            <div>Houses currently on the market</div>
            <table>
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Location</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((house) => (
                        <tr>
                            <td>{house.address}</td>
                            <td>{house.location}</td>
                            <td>{house.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Houses;