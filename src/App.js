import React, { useState, useEffect } from "react";
import List from "./List";
import Loading from "./Loading";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTours();
    return () => {};
  }, []);
  
  const fetchTours = () =>{
    setLoading(true);
    fetch("./data.json") // Getting Json Data From PUBLIC FOLDER
    .then((resp) => resp.json())
    .then((tours) => {
      setTours(tours);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  useEffect(()=>{
    document.title = `Remaining Tours (${tours.length})`;
  })
  const deleteTour = (id) => {
    const newTour = tours.filter((tours) => tours.id !== id);
    setTours(newTour);
  }
  if (loading) {
    return(
      <Loading />
    )
  }
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <div className="heading_text text-center text-light mt-5">
            <h1>{tours.length < 1 ? `No Tour Left` : `My Tours` }</h1>
          </div>
          <div className="heading_text_border"></div>
          <div className="d-flex">
            {tours.length < 1 ? <button className="btn btn-success mx-auto text-light" onClick={() => fetchTours()}>Reload</button> : `` }
          </div>
        </div>
        {tours.map((tour) => {
          return <List key={tour.id} tour={tour} deleteTour={deleteTour} />;
        })}
      </div>
    </div>
  );
}

export default App;
