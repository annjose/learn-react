import currencyFormatter from "@/utils/currencyFormatter";
import { useState } from "react";

const House = ({ house }) => {

    const initialBids = [
        { id: 1, bidderName: "Amy", bidAmount: house.price + 10000 },
        { id: 2, bidderName: "Baldwin", bidAmount: house.price - 2500 },
        { id: 3, bidderName: "Calvin", bidAmount: house.price + 5800 }
    ]

    const [bids, setBids] = useState(initialBids);

    const emptyBid = { id: 0, bidderName: "", bidAmount: '' }
    const [newBid, setNewBid] = useState(emptyBid);

    const onNewBidButtonClick = () => {
        console.log(`New bid submitted. Bidder: ${newBid.bidderName}. Amount: ${newBid.bidAmount}`);

        newBid.id = bids.at(-1).id + 1;
        setBids([...bids, newBid]);
        setNewBid(emptyBid);
    }

    return (
        <>
            <div className="row mt-2">
                <h5 className="col-12">{house.location}</h5>
            </div>
            <div className="row">
                <h3 className="col-12">{house.address}</h3>
            </div>
            <div className="row">
                <h2 className="themeFontColor col-12">
                    {currencyFormatter.format(house.price)}
                </h2>
            </div>
            <div className="row">
                <div className="col-12 mt-3">{house.description}</div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <table className="table-sm">
                        <thead>
                            <tr>
                                <th>Bidder</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bids.map((bid) => (
                                <tr key={bid.id}>
                                    <td>{bid.bidderName}</td>
                                    <td>{currencyFormatter.format(bid.bidAmount)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <input id="bidder" className="h-100"
                        type="text" value={newBid.bidderName} placeholder="Bidder Name"
                        onChange={(e) => { setNewBid({ ...newBid, bidderName: e.target.value }) }} />
                </div>
                <div className="col-3">
                    <input id="bidAmount" className="h-100"
                        type="text" value={newBid.bidAmount} placeholder="Amount"
                        onChange={(e) => { setNewBid({ ...newBid, bidAmount: e.target.value }) }} />
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" onClick={onNewBidButtonClick}>Add bid</button>
                </div>
            </div>
        </>
    );
};

export default House;