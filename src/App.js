import Navbar from "./components/NavBar/Navbar";
import CartWidget from "./components/NavBar/CartWidget";
import Links from "./components/NavBar/Links";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
//import './App.css';

function App() {
  return (
    <>
      <Navbar brand="skates">
        <>
          <CartWidget />
          <Links classAtributes="right hide-on-med-and-down" />
          <Links classAtributes="sidenav" idAtributes="mobile-demo" />
        </>
      </Navbar>
      
      <ItemListContainer />
    </>
  );
}



export default App;


