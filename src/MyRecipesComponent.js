

function MyRecipesComponent({title, image, ingredients, link}) {
  return (
    <div>
      <div className="container">
        <h2>{title}</h2>
      </div>
      
      <div className="container">
        <img src={image} alt='recipe' className='recipe-image'/>
      </div>

      <ul className="container list">
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient}
          </li>
        ))}
      </ul>

      <div className="container">
          <button className='link-btn'>
            <a href={link} target="_blank">See full recipe</a>
          </button>
      </div>
      
    </div>
  )
}

export default MyRecipesComponent;