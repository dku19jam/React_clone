import React from "react";

function Food({name,picture}){

  return <div>
    <h2>I like {name} </h2>
    <img src = {picture} alt ={name}/>
  </div>
}

function renderFood(dish){
  return <Food name ={dish.name} picture={dish.image}/>
}

const foodILike = [
  {
    id:1,
    name : "Kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._qLDMLMwi2F0m7bLAbWxTwHaHa%26pid%3DApi%26h%3D160&f=1"
  },
  {
    id:2,
    name : "pizza",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hgCzy3QSABhfkvGLLB-8aQHaE7%26pid%3DApi%26h%3D160&f=1"
  } 
  ,
  {
    id:3,
    name : "ramen",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rgkdYIndDYG3Kxy9xK5lMAHaHa%26pid%3DApi%26h%3D160&f=1"
  }

]

function App() {
  return (<div> 
    {foodILike.map(dish=>(
      <Food key =  {dish.id} name = {dish.name} picture = {dish.image}/>))}
    </div>
    );
}

export default App;