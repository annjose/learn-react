import currencyFormatter from "@/utils/currencyFormatter";

import Bids from "./bids";

const House = ({ house }) => {

    return (
        <>
            <div className="row mt-2">
                <h5 className="col-12">{house.location}</h5>
            </div>
            <div className="row">
                <h3 className="col-12">{house.address}</h3>
            </div>
            <div className="row">
                <h2 className="theme-color col-12">
                    {currencyFormatter.format(house.price)}
                </h2>
            </div>
            <div className="row">
                <div className="col-12 mt-3">{house.description}</div>
            </div>

            <Bids house={house} />
        </>
    );
};

export default House;