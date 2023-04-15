import {BrowserRouter,Route,Routes} from "react-router-dom";
import {Home,Contact} from "./Pages/index";
import {Footer,Header} from "./Components/index"
function App() {
  return (
    <>
    
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
