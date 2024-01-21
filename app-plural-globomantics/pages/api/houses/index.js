export default function handler(req, res) {
    const initialHouses = [
        { id: 101, address: '123 Marvel Street', location: 'San Jose', price: 900000 },
        { id: 102, address: '456 Disney Way', location: 'Cupertino', price: 1200000 },
        { id: 103, address: '222 Century Dr', location: 'Redmond', price: 890000 }
    ];

    res.status(200).json(initialHouses);
}