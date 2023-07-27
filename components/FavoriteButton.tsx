import axios from 'axios';

import React, {useCallback, useMemo} from 'react';
import {AiOutlinePlus, AiOutlineCheck} from 'react-icons/ai'

import useCurrentUser from '../hooks/useCurrentUser';
import useFavorites from '../hooks/useFavorites';

interface FavoriteButtonProps {
    movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({movieId}) => {
    // const {mutate: mutateFavorites} = useFavorites();

    // const {data: currentUser, mutate} = useCurrentUser();

    // const isFavorite = useMemo(() => {
    //     const list = currentUser?.favoriteIds || []; //search in our current user, in their favorite id's

    //     return list.includes(movieId); //if the current list includes the passed in movie id.
    // },[currentUser, movieId]);

    // const toggleFavorites = useCallback(async()  => {
    //     let response;

    //     if (isFavorite) { //check if current movie is favorited
    //         response = await axios.delete('/api/favorite', {data: {movieId}}); // if it is, we trigger axios delete
    //         console.error(response);
    //     } else {
    //         response = await axios.post('/api/favorite', {movieId}); 
    //         console.error(response);
    //     }

    //     const updatedFavoriteIds = response?.data?.favoriteIds;

    //     mutate({
    //         ...currentUser,
    //         favoriteIds: updatedFavoriteIds
    //     });

    //     mutateFavorites();
    // },[movieId, isFavorite, currentUser, mutate, mutateFavorites])

    // const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;


    return (
        <div onClick={() => {}} 
         className='cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300'>
            < AiOutlinePlus className='text-white cursor-no-drop' size={25}/>
        </div>
    )
}

export default FavoriteButton;