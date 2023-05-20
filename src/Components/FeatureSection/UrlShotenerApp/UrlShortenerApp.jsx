import React, { useState } from "react";
import NewUrl from "./NewUrl";
import "./UrlShortenerApp.css";
import { split } from "postcss/lib/list";

/* This is just a markup so i could finish the rest */

function UrlShortenerApp() {
  const [url, setUrl] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const handleInputChange = e => {
    setUrl(e.target.value);
  };

  //   console.log(url); // ex. https://www.example.com/abaD9825fIaeX3t8AD

  function shortenUrl(url) {
    // Define the characters used for the shortened URL
    const splitUrlIntoArr = url.split("/");
    const urlArrLength = splitUrlIntoArr.length;
    const urlToShorten = splitUrlIntoArr[urlArrLength - 1];
    // console.log("urlToShorten: ", urlToShorten);

    // Generate a random string of 6 characters
    let shortened = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * urlToShorten.length);
      shortened += urlToShorten[randomIndex];
    }

    // Extract base url from full url
    function extractBaseUrl(url) {
      const parsedUrl = new URL(url);
      const baseUrl = parsedUrl.protocol + "//" + parsedUrl.hostname;
      return baseUrl;
    }
    // console.log("baseUrl: ", extractBaseUrl(url));

    const baseUrl = extractBaseUrl(url);

    // Combine the shortened string with a base URL
    const shortenedUrl = baseUrl + "/" + shortened;
    // console.log("output: ", shortenedUrl);

    return shortenedUrl;
  }

  const handleUrlSubmit = e => {
    e.preventDefault();
    setNewUrl(shortenUrl(url));
  };

  return (
    <div className="urlWrapper">
      <div className="url">
        <form onSubmit={handleUrlSubmit}>
          <input
            type="text"
            value={url}
            onChange={handleInputChange}
            placeholder="https://www.example.com/abaD9825fIaeX3t8AD"
          />
          <button type="submit">Shorten It!</button>
        </form>
      </div>
      {newUrl.length > 0 && <NewUrl newUrl={newUrl} />}
    </div>
  );
}

export default UrlShortenerApp;
