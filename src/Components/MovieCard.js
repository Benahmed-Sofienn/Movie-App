import React ,{useState} from "react";
import "./MovieCard";
// , { useState }

import { Rate } from "antd";
import './MovieCard.css'
const MovieCard = ({ movie }) => {
  const [show, setShow] = useState(false)
  const handleShow = () =>{ setShow(true)  } 
  const handlUnshow = () => {setShow(false)}
  return (
    <div className="Background" onMouseOver={handleShow} onMouseLeave={handlUnshow} > 
      <img src={movie.Img} alt="moviePic" className="pic" />
      { show && <div className="dess">
      <Rate disabled value={movie.rate} />
      <h2 className="name">{movie.Name}</h2>
      </div>}
    </div>
  );
};

export default MovieCard;
