import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { useState } from 'react';


function NavBar(props) {
  let handleItemClick = (e, { name }) => props.setActiveItem(name);

  return (
    <div>
      <Menu pointing>
        <Menu.Item
          name='Home'
          active={props.activeItem === 'Home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Messages'
          active={props.activeItem === 'Messages'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Friends'
          active={props.activeItem === 'Friends'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Profile'
          active={props.activeItem === 'Profile'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>


    </div>
  );

}
export default NavBar; 