import React from 'react'

function truncateUrl(url: string, maxLength: number) {
    return url.length > maxLength ? url.substring(0, maxLength) + "..." : url;
}

export default truncateUrl


export const truncateUrlByWidth = (url: string, width: number) => {
    let maxLength = 60; // Default truncation length
    if(width<=400){
      maxLength=30;
    }
    else if (width <= 480) {
      // Mobile viewport or smaller
      maxLength = 35; // Adjust this value for mobile
    } else if (width <= 768) {
      // Tablet viewport
      maxLength = 40; // Adjust this value for tablet
    } 
    else if (width<=900){
      maxLength=60;
    }
    else if (width <= 1024) {
      // Small desktop viewport
      maxLength = 50; // Adjust this value for small desktop screens
    }
    else if (width <= 1440) {
      maxLength=60;
    }
    else {
      // Larger desktop viewport
      maxLength = 55; // Default truncation length for larger screens
    }

    return truncateUrl(url, maxLength);
};
