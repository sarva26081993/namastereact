import React from "react";
import ReactDOM from "react-dom/client";
import restaurant from "./restaurant.json";

// ✅ Extract restaurants safely
const restaurants =
  restaurant?.data?.data?.data?.cards?.find(
    (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
  )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

// ✅ Restaurant Card Component
const ResCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData;

  return (
    <div className="res-card">
      <img
        className="res-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
        alt={name}
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>⭐ {avgRating}</p>
      <p>{costForTwo}</p>
      <p>{sla?.slaString}</p>
    </div>
  );
};

// ✅ Main App Component
const App = () => {
  return (
    <div className="card-container">
      {restaurants.map((res) => (
        <ResCard key={res.info.id} resData={res.info} />
      ))}
    </div>
  );
};

// ✅ Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
