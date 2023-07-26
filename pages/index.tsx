import { NextPageContext } from 'next'
import {getSession} from 'next-auth/react'
import Navbar from '../components/Navbar';
import Billboard from '../components/Billboard';
import MovieList from '../components/MovieList';
import useMovieList from '../hooks/UseMovieList';
import useFavorites from '../hooks/useFavorites';


export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);


  if (!session) { //checking if available session exists
    return {
      redirect: {
        destination: '/auth', //if it doesn't redirect to /auth
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home(){
const { data:movies = [] } = useMovieList(); //using movie list from our hook
const {data: favorites = []} = useFavorites();



  return (
    <>
    <Navbar />
    <Billboard />
    <div className='pb-40'>
    <MovieList title="Trending Now" data={movies}  />
    <MovieList title="My List" data={favorites}  />
    </div>
    </>
  )
}
