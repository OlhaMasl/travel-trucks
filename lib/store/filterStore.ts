import { create } from 'zustand';

interface FilterData {
    location?: string;
    equipment?: string[];
    form?: string;
}

interface FilterStore {
    filterData: FilterData | null;
    setFilterData:  (formData: FilterData) => void;
}

export const useFilterData = create<FilterStore>()((set) => ({
  filterData: null,
  setFilterData: (formData) => set(() => ({ filterData: formData }))
}));