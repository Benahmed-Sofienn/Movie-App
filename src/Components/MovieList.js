import React , {useState} from "react";
import BlackList from "../assets/MoviePoster/BlackList.jpg";
import FatherHood from "../assets/MoviePoster/FatherHood.jpg";
import Infinite from "../assets/MoviePoster/Infinite.jpg";
import Jumanji from "../assets/MoviePoster/Jumanji.jpg";
import Lupin from "../assets/MoviePoster/Lupin.jpg";
import Vikings from "../assets/MoviePoster/Vikings.jpg";
import WrathOfMan from "../assets/MoviePoster/WrathOfMan.jpg";
import MovieCard from "./MovieCard";
import Modale from "./Modal";
import './MovieList.css'

const MovieList = ({ rate, inputText }) => {
  const [arr, setArr] = useState([
    { Img: WrathOfMan, Name: "Wrath Of Man", rate: "2" },
    { Img: Jumanji, Name: "Jumanji: The next level", rate: "1" },
    { Img: Infinite, Name: "Infinite", rate: "3" },
    { Img: FatherHood, Name: "Fatherhood", rate: "1" },
    { Img: BlackList, Name: "The Blacklist", rate: "4" },
    { Img: Vikings, Name: "Vikings", rate: "5" },
    { Img: Lupin, Name: "Lupin", rate: "3" },
  ])
   

 
  return (
    <div className="background">
      {arr
        .filter(
          (movie) =>
            movie.Name.toUpperCase().includes(inputText.toUpperCase()) &&
            movie.rate >= rate
        )
        .map((movie, i) => (
          <MovieCard movie={movie} key={i} />
        ))}

      {/* <div className="addBtn"><h2 onClick={handelClick}>[+]</h2></div>       */}
      <Modale setArr ={setArr} arr={arr} />
    </div>
  );
};

export default MovieList;
