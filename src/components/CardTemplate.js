import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function CardTemplate(props) {
  let data = props.userData;
  return (
    // className has to be used because of JSX 
    <Card className="Card">
      <Image src={data.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{data.name}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Hunter is a cool guy
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
        5 Friends
      </a>
      </Card.Content>
    </Card>
  );
}

export default CardTemplate;
