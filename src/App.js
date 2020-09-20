import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserCarousel from './components/UserCarousel.js';
import Carousel from "react-material-ui-carousel";

const USERDATA = [
  {
    name: "Oliver Li",
    image: "https://cdn.discordapp.com/attachments/755444435256344617/757279333046943835/oliver.jpg"
  },
  {
    name: "James Xu",
    image: "https://media-exp1.licdn.com/dms/image/C5603AQEv6YT7KZaq8Q/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=cyDwsQJUHpY7dNtmE_MU9LJ_ul08FIx1ZU0mRmiyGMU"

  },
  {
    name: "Oliver Li",
    image: "https://cdn.discordapp.com/attachments/755444435256344617/757279333046943835/oliver.jpg"
  },
  {
    name: "James Xu",
    image: "https://media-exp1.licdn.com/dms/image/C5603AQEv6YT7KZaq8Q/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=cyDwsQJUHpY7dNtmE_MU9LJ_ul08FIx1ZU0mRmiyGMU"

  },
  {
    name: "Oliver Li",
    image: "https://cdn.discordapp.com/attachments/755444435256344617/757279333046943835/oliver.jpg"
  },
  {
    name: "James Xu",
    image: "https://media-exp1.licdn.com/dms/image/C5603AQEv6YT7KZaq8Q/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=cyDwsQJUHpY7dNtmE_MU9LJ_ul08FIx1ZU0mRmiyGMU"

  }
]

function App() {

  return (
    <div className="App">
      <UserCarousel userData={USERDATA}>
        hey
      </UserCarousel>
    </div>




  );
}

export default App;
