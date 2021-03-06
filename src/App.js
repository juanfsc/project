 
import Navbar from "./components/NavBar/Navbar";
import CartWidget from "./components/NavBar/CartWidget";
import Links from "./components/NavBar/Links";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemCount from "./components/itemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
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
      
      <ItemDetailContainer>
        
      </ItemDetailContainer>
    </>
  );
}



export default App;