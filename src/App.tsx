import React from "react";
import logo from "./logo.svg";
import "./App.css";
import og from "./og.png";
import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags async={false}>
        <title>Title</title>
        <meta name="description" content="Description" />
        <meta property="og:title" content="OG title" />
        <meta property="og:description" content="OG description" />
        <meta property="og:image" content={og} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </HelmetProvider>
  );
}

export default App;
