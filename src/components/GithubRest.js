
import { useState, useEffect } from "react";

import githubToken from "../githubtoken";

const GithubRest = (method, data, gistID, setGistID)=> {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=> {
    const restPath = ()=> {
      switch (method) {
        //create gist
        case 'POST':
          return 'gists';
          break;
        //update gist
        case 'PATCH':
          return `gists/${gistID}`;
          break;
        //delete gist
        case 'DELETE':
          return `gists/${gistID}`;
          break;
        default: return null;
      }
    }
  console.log(restPath())

  const requestOptions = {
    method: method,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${githubToken}`
    },
    body: JSON.stringify(data)
  }


  fetch(`https://api.github.com/${restPath()}`,requestOptions)
    .then(response => response.json() )
    .then(
      (result) => {
        setIsLoaded(true);
        !gistID && setGistID(result.id);
        console.log(result)
    },
      (error) => {
        setIsLoaded(true);
        setError(error);
        console.log(error)
      }
    )
  }, [method]);

  return (
    gistID
  )
}



export default GithubRest