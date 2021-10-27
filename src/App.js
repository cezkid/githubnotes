import React, { useState, useEffect } from "react";

import githubToken from "./githubtoken";

function App() {

  const [data, setData] = useState(null);


  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(()=> {
    const requestOptions ={
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${githubToken}`
      },
      body: JSON.stringify({
        description: "Nopepad Title",
        files: {
          "Note 1": {
            content:"Note 1 Content"
          },
          "Note 2": {
            content:"Note 2 Content"
          }
        }
      })
    }
    fetch('https://api.github.com/gists',requestOptions)
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

  return (
    <div className="App">
      <h1>Notepad Application</h1>
    </div>
  );
}

export default App;
