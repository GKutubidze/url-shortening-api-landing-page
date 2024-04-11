import React from 'react'

   
const copyToClipboard = (url: string,isCopy:boolean,setIsCopy: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsCopy(!isCopy);
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log("URL copied to clipboard:", url);
        // Optionally, you can provide user feedback that the URL has been copied
      })
      .catch((error) => {
        console.error("Failed to copy URL to clipboard:", error);
        // Optionally, you can handle errors here
      });
  };
 

export default copyToClipboard