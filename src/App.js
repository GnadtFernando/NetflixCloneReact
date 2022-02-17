import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import './App.css'
import FeaturedMovie from "./components/FeaturedMovie";

export default() => {

  const[movieList, setMovieList] = useState([]);
  const[featuredData, setFeaturedData] = useState(null);

  useEffect(()=> {
    const loadAll = async () => {
      //Pegando filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando filme destque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.lenght -1 ));
      let chosen = originals[0].items.results[randomChosen];

      console.log(chosen);
    }


    loadAll();
  }, []);

  return (
    <div className="page">

      {featuredData &&
        <FeaturedMovie item={featuredData}/>

      }

      <section className="lists">
        {movieList.map((item, key)=> (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}