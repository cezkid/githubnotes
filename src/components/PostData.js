
import React, { useState, useEffect } from "react";
  

const PostData = ({data})=> {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // {
  //   description: "Nopepad Title",
  //   files: {
  //     "Note 1": {
  //       content:"Note 1 Content"
  //     },
  //     "Note 2": {
  //       content:"Note 2 Content"
  //     }
  //   }
  // }


  useEffect(()=> {
    const requestOptions ={
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${githubToken}`
      },
      body: JSON.stringify(data)
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

}

export default PostData