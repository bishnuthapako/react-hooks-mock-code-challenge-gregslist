import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({loadData}) {


  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
      
      {loadData.map((data)=><ListingCard key={data.id} description={data.description} image={data.image} location={data.location}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
