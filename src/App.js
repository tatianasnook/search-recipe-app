import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "ee2eaf9d";
  const MY_KEY = "89391d16d790029bdeec476d59c92eaa";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('salad');

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=%20${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe();
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  } 

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
           <input className='search' placeholder="Enter ingredients..." onChange={myRecipeSearch} value={mySearch}/>
        </form>
      </div>

      <div className='container'>
        <button className='search-btn' onClick={finalSearch}>
          Search a recipe
        </button>
      </div>
      
      {myRecipes.map((element, index) => (
        <MyRecipesComponent 
          key={index}
          title={element.recipe.label}
          image={element.recipe.image}
          ingredients={element.recipe.ingredientLines}
          link={element.recipe.url}
        />
      ))}

    </div>
  );
}

export default App;

