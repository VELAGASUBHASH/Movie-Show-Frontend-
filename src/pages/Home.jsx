import { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import toast from "react-hot-toast";
import { searchMovies,getpopularmovies } from "../api/api";
import "./Home.css";


function Home(){
    const[searchQuery,setSearchQuary]=useState("");
    const[movie,setmovie]=useState([]);
    const[error,seterror]=useState(null);
    const[loading,setloading]=useState(true);


    useEffect(() => {
  const loadmovie = async () => {
    try {
      const popularmovie = await getpopularmovies();
      setmovie(popularmovie);   // ✅ THIS WAS MISSING
    } catch (error) {
      toast.error("Unable To Fetch");
      console.log(error);
      seterror("Failed To Fetch Movie");
    } finally {
      setloading(false);
    }
  };

  loadmovie();
}, []);

const handlesubmit =(e)=>{
e.preventDefault(); 
    toast.success("Search completed!");
  setSearchQuary("");
};
    return(
        <div className="home">
            <form onSubmit={handlesubmit} className="search">
                <input type="text"
                placeholder="Search For Movie Here" 
                className="search-input" 
                value={searchQuery} 
                onChange={(e)=>setSearchQuary(e.target.value)}>
                </input>
            <button type="submit" className="submit-button ">Search</button>
            </form>

            {loading?<div className="loading">Loading...</div>:
              <div className="grid">
                {movie.map((card)=> card.title.toLowerCase().startsWith(searchQuery.toLowerCase())&&(
                  <Cards card={card} key={card.id}/> 
                ))}

            </div>
            
            }
            

        </div>
    );

}

export default Home;