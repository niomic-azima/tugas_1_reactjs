import React, { Component } from 'react';
import MenuUtama from "./Page/MenuUtama";
import MenuKontak from './Page/MenuKontak';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuProduct from './Page/MenuProduct';

const Header = () => {
  return(
    <div>
      <h1>Ini adalah Header</h1>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      <h1>Ini adalah Footer</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return(
      <div>
        <Header/>
        <MenuUtama/>
        <MenuProduct/>
        <MenuKontak/>
        <MenuTentangKami/>
      <Footer/>
    </div>
    );
  }
}

export default App;
