import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import React from "react";


function UserCarousel(props) {
  const datalist = props.userData;
  let items = []
  let dataobj = []
  let i;
  for (i = 0; i < datalist.length; i++) {
    if ((i % 3) === 0 && i !== 0) {
      items.push(dataobj);
      dataobj = []
    }
    dataobj.push({ 'name': datalist[i].name, 'image': datalist[i].image });


  }
  items.push(dataobj);

  return (
    <Carousel navButtonsAlwaysVisible={true} interval='10000'>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

function Item(props) {
  return (
    <Paper className="itemContainer">
      {props.item.map((item, i) => {
        return <div>
          <h2>{item.name}</h2>
          <img src={item.image} />
        </div>
      })}

      <Button className="CheckButton">
      </Button>
    </Paper>
  )
}

export default UserCarousel; 