// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//
function App() {
  
  // userstate - it is used to convert js into ui/ux on screen server
     const [tracks, setTracks] = useState([]);
     const [key, setKeyword]= useState([]);
     const [isLoading, setisLoading] = useState(true);
  const getTracks =async() =>{
     setisLoading(true);
    // we are fetching the parameters from api 

    let data = await fetch(
      "https://v1.nocodeapi.com/rishabh_raj42/spotify/WlMGmZFpweezDiwe/search?q=daku&<q>");

    // converting the  data to json file. here we are getting different parameters as tracks, duration etc
    // fetch is taking too long time so we used async and await to decrease their loading time as Js is fast language 

    let convertedData = await data.json();
    console.log(convertedData.albums.items);

    // we are fetching all tracks form the api and items within that particular track

    setTracks(convertedData.albums.items);
    setisLoading(false);
  }
  return (
   <>
   <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      X-MUSIC
    </a>
   
    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent" >
    
      
        <input
        value={key}
        onChange={(event)=> setKeyword(event.target.value)}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={getTracks} className="btn btn-outline-success" >
          Search
        </button>
      
    </div>
  </div>
</nav>

 
<div className="container">
  <div className={'row ${isLoading ? "" : "d-none"}'}>
    <div className='col'>
    <>
  <div className="card">
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
  <div className="card" aria-hidden="true">
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title placeholder-glow">
        <span className="placeholder col-6" />
      </h5>
      <p className="card-text placeholder-glow">
        <span className="placeholder col-7" />
        <span className="placeholder col-4" />
        <span className="placeholder col-4" />
        <span className="placeholder col-6" />
        <span className="placeholder col-8" />
      </p>
      <a
        className="btn btn-primary disabled placeholder col-6"
        aria-disabled="true"
      />
    </div>
  </div>
</>

    </div>
  </div>
  <div className='row'>

  
    {tracks.map((element) => {
        return (
        <div key={element.id} className='col-lg-3 col-md-3 py-2'>
         
          <div className="card" style={{ width: "18rem" }}>
  <img src={element.images[0].url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">
      Artist : {element.artists[0].name}
    </p>
    <p className="card-text">
      Release Date : {element.release_date}
    </p>
    <audio src={element.preview_url} controls className="w-100"></audio>
  </div>
</div>

        </div>
        );
      })}
  </div>
  </div>
   </>
  );
}

export default App;
