
import { useState, useEffect } from "react";

import githubToken from "../githubtoken";

/**
 * Function to aid with connecting to Github api
 * @param {Object} data - github gist object that gets stringified
 * @param {string} gistID - gist id state variable
 * @param {function} setGistID - gist id state function
 */
const GithubRest = (gistID, setGistID)=> {

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

 /**
  * Function to help you make api call
  * @param {string} method 
  * @param {object} gistObject 
  */
  const call = (method,gistObject)=> {

  const body = gistObject && {body: JSON.stringify(gistObject)};
  const requestOptions = {
    method: method,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${githubToken}`
    },
    ...body }

  fetch(`https://api.github.com/${routes[method]}`,requestOptions)
    .then(response => response.json() )
    .then(
      (result) => {
        setIsLoaded(true);
        (method === 'POST') && console.log(`Created! You can view your notepad here:\n ${result.html_url}`);
        (method === 'PATCH') && console.log(`Updated! You can view your notepad here:\n ${result.html_url}`);
        (method === 'POST' || 'PATCH') && setGistID(result.id);
        (method === 'DELETE') && console.log(`Deleted!`);

    },
      (error) => {
        setIsLoaded(true);
        setError(error);
        (method === 'DELETE') && console.log(`Deleted! no response from github see below:`);
        console.log(error);
      }
    )
  }

  return { call }
}



export default GithubRest