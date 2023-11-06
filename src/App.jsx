import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import HistoryItemContainer from "./HistoryItemContainer";

function App() {
  const [data, setData] = useState({
    video_id: 1,
    store_name: 'Store Name 1',
    category: 'Theft',
    confidence_rate: 50
  })

  const handleClick = () => {
    console.log("Button clicked");
  }  

  return (
    <div className="App">
      <div style={container}>
        <aside>
          <h2 class="display-title-2">History</h2>
          <HistoryItemContainer />
          <HistoryItemContainer />
          <HistoryItemContainer />
        </aside>
        <main>
          <video width="1289px" height="632px" autoPlay>
            <source src="sample_video.mp4" type="video/mp4"></source>
          </video>
          <div style={content_divider}>
            <div style={content_wrapper}>
              <h1 class="display-title-1" id="store">Store Name 1</h1>
              <h1 id="date">2023/10/23 10:23PM</h1>
              <div id="category">Theft accident - 1 Person involved</div>
              <div id="confidence">Confidence : 50%</div>
              <h1 id="detail_link">Some details ++</h1>
            </div>
            <button class="send" onClick={handleClick} style={button}>Send Video</button>
          </div>
        </main>
      </div>
    </div>
  );
}

const content_wrapper = {
  width: "59vw"
}

const content_divider = {
  display: "flex",
  flexDirection: "row",
}

const container = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100%"
}

const button = {
  alignSelf: "flex-end"
}

export default App;
