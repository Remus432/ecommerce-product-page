import React from 'react';
// Styling
import "./styles.scss";
// Children Components
import Nav from "./components/Nav"
import Product from "./components/Product"
import GalleryModal from './components/GalleryModal';
// Redux
import { useSelector } from "react-redux"
import { selectIsMenuOpen } from "./features/menu/menuSlice"

function App() {
  const isMenuOpen = useSelector(selectIsMenuOpen)

  return (
    <main className={isMenuOpen && "menu-open"}>
      <GalleryModal />
      <Nav />
      <Product />
    </main>
  );
}

export default App;
