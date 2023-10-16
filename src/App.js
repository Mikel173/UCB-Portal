import CarouselComponent from './componentes/CarouselComponent';
import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='contenedor-principal'>
          <CarouselComponent />
        </div>
      </div>
    );
  }
}
