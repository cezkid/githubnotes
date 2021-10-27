import React, { useState, useEffect } from "react";

import githubToken from "./githubtoken";

function App() {

  const [data, setData] = useState(null);


  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(()=> {
    const requestOptions ={
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${githubToken}`
      }
    }
    fetch('https://api.github.com/users/cezkid/gists',requestOptions)
      .then(response => response.json() )
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result)
      },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error)
        }
      )
  }, []);

  data && console.log(data);

  return (
    <div className="App">
      <h1>Notepad Application</h1>
    </div>
  );
}

export default App;
