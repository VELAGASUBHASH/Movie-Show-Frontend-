import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import {Routes,Route} from 'react-router-dom'
import Favorites from "./pages/Favorites";
import Navbar from "./Components/Navbar";
import { MovieProvider } from "./Context/FavoriteContext";
import "./App.css";
const App = () => {
  return (
    <MovieProvider>
          <main className="main-content">
      <div>
        <Navbar/>
      </div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </main>
    </MovieProvider>
  );
};

export default App;