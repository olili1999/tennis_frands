import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserCarousel from './components/UserCarousel.js';
import Carousel from "react-material-ui-carousel";
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar.js';
import Profile from './components/Profile.js';
import Card from './components/CardTemplate.js';

import { useState } from 'react';



const USERDATA = [
  {
    name: "Oliver Li",
    image: "https://cdn.discordapp.com/attachments/755444435256344617/757279333046943835/oliver.jpg"
  },
  {
    name: "James Xu",
    image: "https://media-exp1.licdn.com/dms/image/C5603AQFbzCKIr1T9Tg/profile-displayphoto-shrink_400_400/0?e=1606953600&v=beta&t=FpGvuYJ7DqikFm692x_hFvliipzG2Yf2F0FgjKPqr-4"

  },
  {
    name: "Oliver Li",
    image: "https://cdn.discordapp.com/attachments/755444435256344617/757279333046943835/oliver.jpg"
  },
  {
    name: "James Xu",
    image: "https://media-exp1.licdn.com/dms/image/C5603AQFbzCKIr1T9Tg/profile-displayphoto-shrink_400_400/0?e=1606953600&v=beta&t=FpGvuYJ7DqikFm692x_hFvliipzG2Yf2F0FgjKPqr-4"

  },
  {
    name: "Oliver Li",
    image: "https://cdn.discordapp.com/attachments/755444435256344617/757279333046943835/oliver.jpg"
  },
  {
    name: "James Xu",
    image: "https://media-exp1.licdn.com/dms/image/C5603AQFbzCKIr1T9Tg/profile-displayphoto-shrink_400_400/0?e=1606953600&v=beta&t=FpGvuYJ7DqikFm692x_hFvliipzG2Yf2F0FgjKPqr-4"

  }
]


const PROFILEDATA =
{
  name: "Hunter Li",
  image: "https://media-exp1.licdn.com/dms/image/C4D03AQFoO54RCkhVBA/profile-displayphoto-shrink_400_400/0?e=1606953600&v=beta&t=z64Rd8lngK5rKySTaLdy4jC7Zq8a1PKWpmnLAXnFszE"
}



function App() {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <div className="App">
      <NavBar activeItem={activeItem} setActiveItem={setActiveItem} > </NavBar>
      {activeItem === 'Home' ? (<UserCarousel userData={USERDATA}>
        hey
      </UserCarousel>) : null}
    </div>




  );
}

export default App;
