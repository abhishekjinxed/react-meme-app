import React from 'react';

function createMeme(props) {
  return (
    <div>
      <h1>Home{props.name}</h1>
      <p>Homepage body content</p>
    </div>
  );
}

export default createMeme;
