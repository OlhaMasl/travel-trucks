import { QueryClient, HydrationBoundary, dehydrate, } from "@tanstack/react-query";
import { getTrucks } from "@/lib/api";
import CatalogPageClient from "./CatalogPage.client";

const CatalogPage = async() => {

const queryClient = new QueryClient();

const page = 1;

await queryClient.prefetchQuery({
    queryKey: ["trucks", page],
    queryFn: () => getTrucks(page),
  });

  return (
     <HydrationBoundary state={dehydrate(queryClient)}>
    <CatalogPageClient  page={page}/>
    </HydrationBoundary>
  )
};

export default CatalogPage;