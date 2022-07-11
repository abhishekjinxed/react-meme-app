import React, { useState } from 'react';
import './style.css';
import { Card, Button } from 'react-bootstrap';
import CreateMeme from './createMeme';

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.data.memes,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses ff wait some time.... </h1>{' '}
        </div>
      );

    return (
      <div className="App">
        <CreateMeme name=" Aabhishek" />
        <h1> Meme Templates </h1>{' '}
        {items.map((item) => (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.url} width="200" height="200" />
            <Card.Body>
              <Card.Title>{item.id}</Card.Title>
              <Card.Text>{item.name}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default App;
