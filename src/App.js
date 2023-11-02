import Navigation from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended.js";
import Sidebar from "./sidebar/Sidebar.js"

function App() {
  return (
    <>
    <Sidebar/>
    <Navigation/>
    <Recommended/>
    <Products/>
    </>
    
    );
}

export default App;

