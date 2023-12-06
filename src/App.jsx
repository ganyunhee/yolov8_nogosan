import React, { useState } from "react";
import "./App.css";
import HistoryItemContainer from "./HistoryItemContainer";

const exampleData = [
  {
    title: "마포구 서강대점 GS25 3호점",
    date: "2023/10/04 10:23PM",
    category: "Theft - 1 Person involved",
    confidence: 64,
    video : "sample_video1.mp4"
  },
  {
    title: "양천구 목동동로1 CU 1호점",
    date: "2023/10/01 5:23PM",
    category: "Theft - 1 Person involved",
    confidence: 76,
    video : "sample_video2.mp4"
  },
  {
    title: "강서구 김포공항 아이스크림 무인매장",
    date: "2023/9/24 9:23AM",
    category: "Theft - 1 Person involved",
    confidence: 99,
    video : "sample_video3.mp4"
  },
  {
    title: "강남구 지하철역 2호선 게임 무인매장 ",
    date: "2023/8/8 1:23AM",
    category: "Theft - 1 Person involved",
    confidence: 24,
    video : "sample_video4.mp4"
  },
];

export default function App() {
  const [currentHistory, setcurrentHistory] = useState({
    title: "마포구 서강대점 GS25 3호점",
    date: "2023/10/04 10:23PM",
    category: "Theft - 1 Person involved",
    confidence: 64,
    video : "sample_video1.mp4"
  });

  return (
    <div className="App">
      <div className="flex h-screen w-full gap-8 bg-slate-100 p-8">
        <div className="scrollbar-hide flex h-full w-1/4 flex-col gap-4 overflow-y-auto scroll-smooth rounded-2xl bg-white p-4 shadow-xl">
          <p className="flex h-16 w-full items-center justify-center text-4xl font-bold">
            History
          </p>
          {exampleData.map((history) => {
            return (
              <div onClick={() => {setcurrentHistory(history)}}>
                <HistoryItemContainer
                  title={history.title}
                  category={history.category}
                  date={history.date}
                  confidence={history.confidence}
                />
              </div>
            );
          })}
        </div>

        <div className="flex  -full flex-1 flex-col gap-4 rounded-2xl bg-white p-4 shadow-xl">
          <video className="w-full overflow-hidden rounded-xl bg-slate-100 " autoPlay src={currentHistory.video}></video>

          <div className="flex w-full flex-1  flex-col">
            <p className="w-full text-4xl p-2 font-bold">{currentHistory.title}</p>
            <p className="w-full text-2xl pl-3">{currentHistory.date}</p>
            <p className="w-full text-2xl pl-3 pb-3">{`${currentHistory.category} (${currentHistory.confidence}%)`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const content_wrapper = {
  width: "59vw",
};

const content_divider = {
  display: "flex",
  flexDirection: "row",
};

const container = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100%",
};

const button = {
  alignSelf: "flex-end",
};
