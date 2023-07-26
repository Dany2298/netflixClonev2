import useSWR from 'swr';
import fetcher from '../lib/fetcher';

//fetching all of our favorites from the api.
const useFavorites = () => { 
    const {data, error, isLoading, mutate } = useSWR('/api/favorites', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    console.log("running!")
    return{
        data,
        error,
        isLoading,
        mutate
    }
};

export default useFavorites;