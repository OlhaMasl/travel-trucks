'use client';

import { getTrucks } from '@/lib/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

interface CatalogPageClientProps {
    page: number;
}

const CatalogPageClient = ({page}: CatalogPageClientProps) => {

const { data } = useQuery({
        queryKey: ['trucks', page ],
        queryFn: () => getTrucks(page),
        placeholderData: keepPreviousData,
        refetchOnMount: false,
    });

console.log(data);

return (<div>Сторінка каталог</div>)
};

export default CatalogPageClient;