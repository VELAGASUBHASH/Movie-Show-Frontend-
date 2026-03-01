import "./Favorites.css";
import Cards from "../Components/Cards";
import { useMovieContext } from "../Context/FavoriteContext";
function Favorites(){
    const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <Cards card={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
    return(
        <div>
        <h2 className="empty-favorites">
            No Favorites Added Yet!
        </h2>
        <p>Start Adding To Favorites And They Will Be Displayed Here</p>
        </div>
    );
}

export default Favorites;