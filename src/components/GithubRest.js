
import { useState, useEffect } from "react";

import githubToken from "../githubtoken";

/**
 * 
 * Helper function for github API
 * @param {string} method - Defines method and is used to switch REST location.
 * @param {Object} data - data being sent on request.
 */
const GithubRest = (method, data)=> {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gistID, setgistID] = useState(null);

 const returnURL = ()=> {
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
  console.log(returnURL())

  const testData = {
    description: "Nopepad Title",
    files: {
      "Note 1": {
        content:"Note 1 Content"
      },
      "Note 2": {
        content:"Note 2 Content"
      }
    }
  }


  useEffect(()=> {
    const requestOptions ={
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${githubToken}`
      },
      body: JSON.stringify(testData)
    }
    fetch(`https://api.github.com/${returnURL()}`,requestOptions)
      .then(response => response.json() )
      .then(
        (result) => {
          setIsLoaded(true);
          setgistID(result);
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

export default GithubRest