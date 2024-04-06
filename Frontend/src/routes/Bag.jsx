import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";

const Bag = () => {

  const item = {
    "id": "007",
    "image": "images/7.jpg",
    "company": "The Indian Garage Co",
    "item_name": "Men Slim Fit Regular Shorts",
    "original_price": 1599,
    "current_price": 639,
    "discount_percentage": 60,
    "rating": { "stars": 4.2, "count": 388 }
  };

  return <>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
        <BagItem item = {item} />
        </div>
        <div className="bag-summary">
        <BagSummary />
        </div>
      </div>
    </main>
  </>
}

export default Bag;
