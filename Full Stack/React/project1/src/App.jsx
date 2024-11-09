import { useState } from 'react'
import './App.css'

function App() {
  const [joke, setJoke] = useState("It is a jokessss .......")
  const [title, setTitle] = useState()
  const [movie, setMovie] = useState()

  // async function getJoke() {
  //   const response = await fetch('https://v2.jokeapi.dev/joke/Any');
  //   const data = await response.json();
  //   if(data.type == 'single') {
  //     setJoke(data.joke);
  //   }
  //   else {
  //     setJoke(`${data.setup}.... ${data.delivery}`)
  //   }
  // }

  async function getMovie() {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${title}`);
    const data = await response.json();
    // console.log(data)
    setMovie(data);
  }

  return (
    // For Joke 

    // <div>
    //   <div>
    //     <button onClick={() => {getJoke()}}>Click here for New Joke</button>
    //     {/* <button onClick={getJoke}>Click here for New Joke</button> */}
    //   </div>
    //   <div>
    //       {joke}
    //   </div>
    // </div>


    // For Movie

    <div>
      <div>
        <input type="text" onChange={() => setTitle(e.target.value)} placeholder='Enter the title' />
        <button onClick={getMovie}>Search</button>
      </div>


     {
      movie?.map((m, i) => {
      
        return (
        <div key={i}>
            <img src={`${m?.show?.image.medium}`} alt="img" />
            <h2>Name :- {`${m.show.name}`}</h2>
            <h3>Language :-  {`${m.show.language}`}</h3>
            <p>RunTime :- {`${m.show.runtime} mins`}</p>
        </div>
      )})
     }
      

    </div>
  )
}

export default App