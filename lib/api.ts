import axios from "axios";
import { Truck } from "../types/trucks";

interface GetTrucksResponse {
    total: number;
    items: Truck[];
};


export const getTrucks = async (page: number, location?: string, AC?: boolean, transmission?: string, kitchen?: boolean, TV?: boolean, bathroom?: boolean, form?: string): Promise<GetTrucksResponse> => {
  const response = await axios.get<GetTrucksResponse>('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers', {
    params: {
      page,
      location,
      AC,
      transmission,
      kitchen,
      TV,
      bathroom,
      form
    }
  });
  return response.data;
};