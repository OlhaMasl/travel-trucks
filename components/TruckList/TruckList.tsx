import type { Truck } from "@/types/trucks";

interface TruckListProps {
trucks:Truck[];
}

const TruckList = ({trucks}: TruckListProps) => {
  return (
   <ul>
    {trucks.map((truck) => (<li key={truck.id}>
        <img src={truck.gallery[0].thumb} alt="truck picture"/>
        <div>
            <h2>{truck.name}</h2>
            <p>{truck.price}</p>
        </div>
        <div>
            <div>{`${truck.rating} (${truck.reviews.length} Reviews)`}</div>
             <div>{truck.location}</div>
        </div>
        <p>{truck.description}</p>
        <button>Show more</button>
        </li>))}
   </ul>
  )
};

export default TruckList;