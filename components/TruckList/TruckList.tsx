import type { Truck } from "@/types/trucks";
import Image from 'next/image';
import css from "./TruckList.module.css";
import { Icon } from "../ui/Icon/Icon";

interface TruckListProps {
trucks:Truck[];
}

const TruckList = ({trucks}: TruckListProps) => {
  return (
   <ul>
    {trucks.map((truck) => (<li key={truck.id} className={css.truckCard}>
        <div className={css.imgWrp}>
        <Image src={truck.gallery[0].thumb} alt="truck picture" width={564} height={320} className={css.img}/>
        </div>

        <div className={css.truckInfo}>
        <div className={css.truckNamePrice}>
            <h2 className={css.NamePrice}> {truck.name}</h2>
            <p className={css.NamePrice}>&euro;{truck.price.toFixed(2)}</p>
        </div>
        <div className={css.truckReviewsLocation}>
            <div>{`${truck.rating} (${truck.reviews.length} Reviews)`}</div>
             <div>{truck.location}</div>
        </div>
        <p className={css.description}>{`${truck.description.slice(0, 62)}...`}</p>

    <ul className={css.optionList}>

        {truck.transmission === "automatic" && <li  className={css.optionItem}>        
            <Icon name={'icon-diagram'} width={20} height={20} />
            <p>Automatic</p>
            </li>}

        {truck.AC && <li className={css.optionItem}>
            <Icon name={'icon-wind'} width={20} height={20} />
            <p>AC</p>
            </li>}

        {truck.engine === "petrol" && <li className={css.optionItem}>
            <Icon name={"icon-fuel-pump"} width={20} height={20} />
            <p>Petrol</p>
            </li>}

        {truck.kitchen && <li className={css.optionItem}>
            <Icon name={"icon-cup-hot"} width={20} height={20} />
            <p>Kitchen</p>
            </li>}

        {truck.radio && <li className={css.optionItem}>
            <Icon name={"icon-radio"} width={20} height={20} />
            <p>Radio</p>
            </li>}

        {truck.bathroom && <li className={css.optionItem}>
            <Icon name={"icon-shower"} width={20} height={20} />
            <p>Bathroom</p>
            </li>}

        {truck.refrigerator && <li className={css.optionItem}>
            <Icon name={"icon-fridge"} width={20} height={20} />
            <p>Refrigerator</p></li>}

        {truck.microwave && <li className={css.optionItem}>
            <Icon name={"icon-microwave"} width={20} height={20} color="#FFFFFF"/>
            <p>Microwave</p>
            </li>}

        {truck.gas && <li className={css.optionItem}>
            <Icon name={"icon-gas-stove"} width={20} height={20} />
            <p>Gas</p>
            </li>}

        {truck.water && <li className={css.optionItem}>
            <Icon name={"icon-water"} width={20} height={20} />
            <p>Water</p></li>}

    </ul>

        <button  type="button" className={css.btn}>Show more</button>
        </div>
        </li>))}
   </ul>
  )
};

export default TruckList;