 
 import React from "react";
 
 

export default function Meme(){
 

   const [meme, setMeme] = React.useState({  
	topText:"", bottomText:"" , randomImage:"https://i.imgflip.com/1c1uej.jpg" 
   })


   const [allMeme, setAllMeme] = React.useState([])
   

   React.useEffect(function(){
	  fetch("https://api.imgflip.com/get_memes")
	  .then( res => res.json())
	  .then( data => setAllMeme(data.data.memes))

   }, [])

   function handleChange(event){
   const {name , value} = event.target
	
   setMeme( prevState => {
	return {
		...prevState,
		[name]: value,
	}
   })
   }
  
   console.log(meme)

   function generateMemeImage(){


	const randomNumber = Math.floor(Math.random() * allMeme.length);

	const url = allMeme[randomNumber].url;
 
	setMeme( prevState =>{

		return {
			...prevState,
			randomImage: url

		}
	}
 


	);
   }

  




	return(
		<main>
		<div className="form">
			<input type="text" className="form--input" placeholder="Top text" value={meme.topText}  name="topText"  onChange={handleChange} />
			<input type="text" className="form--input" placeholder="Bottom text" value={meme.bottomText} name="bottomText" onChange={handleChange}/>
			<button onClick={generateMemeImage}>Give me a new meme image</button>
		</div>

		<div className="meme">

		<img  className="meme--image" src={meme.randomImage}/>
		<h2 className="meme--text top">{meme.topText}</h2>
		<h2 className="meme--text bottom">{meme.bottomText }</h2>
		</div>
	   
		</main>
	)
}