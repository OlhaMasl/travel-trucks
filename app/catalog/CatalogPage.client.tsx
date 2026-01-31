'use client';

import FiltersBlock from '@/components/FiltersBlock/FiltersBlock';
import { getTrucks } from '@/lib/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import css from './CatalogPage.client.module.css';
import { useFilterData } from '@/lib/store/filterStore';

interface CatalogPageClientProps {
    page: number;
}

const CatalogPageClient = ({page}: CatalogPageClientProps) => {

    const { filterData } = useFilterData();
    console.log(filterData);

const { data, isLoading, error } = useQuery({
        queryKey: ['trucks', page],
        queryFn: () => getTrucks(page),
        placeholderData: keepPreviousData,
        refetchOnMount: false,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error || !data) return <p>Some error..</p>;

console.log(data?.items);


return (<div className={css.catalogWrp}>
    <FiltersBlock/>
</div>)
};

export default CatalogPageClient;