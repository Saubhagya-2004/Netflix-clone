import React from 'react'
import Hero from '../components/Hero'
import { Outlet } from 'react-router-dom'
import MoiveRow from '../components/MovieRow'
import endpoints from '../constants/moiveService'
import MovieRow from '../components/MovieRow'

const movieRowConfigs = [
  { id: 1, title: "Upcoming", url: endpoints.upcoming },
  { id: 2, title: "Popular", url: endpoints.popular },
  { id: 3, title: "Trending", url: endpoints.trending },
  { id: 4, title: "Comedy", url: endpoints.comedy },
  { id: 5, title: "Top Rated", url: endpoints.topRated }
];

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <div className="space-y-8 pb-12">
        {movieRowConfigs.map((row) => (
          <MovieRow 
            key={row.id}
            title={row.title} 
            url={row.url}
            aria-label={`${row.title} movies`}
          />
        ))}
      </div>
      <Outlet />
    </main>
  );
}

export default Home
