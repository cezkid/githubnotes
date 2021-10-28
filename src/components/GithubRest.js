
import { useState, useEffect } from "react";

import githubToken from "../githubtoken";

/**
 * Function to aid with connecting to Github api
 * @param {string} method - 'POST, PATCH, DELETE'
 * @param {Object} data - github gist object that gets stringified
 * @param {string} gistID - gist id state variable
 * @param {function} setGistID - gist id state function
 */
const GithubRest = (method, data, gistID, setGistID)=> {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  /**
   * Stores the routes matched to their method
   */
  const routes = { 
    'POST':'gists',
    'PATCH':`gists/${gistID}`,
    'DELETE':`gists/${gistID}`
  }

  useEffect(()=> {

  const requestOptions = {
    method: method,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${githubToken}`
    },
    body: JSON.stringify(data)
  }

  method &&
  fetch(`https://api.github.com/${routes[method]}`,requestOptions)
    .then(response => response.json() )
    .then(
      (result) => {
        setIsLoaded(true);
        console.log(result);
        (method === 'POST' || 'PATCH') && setGistID(result.id)
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