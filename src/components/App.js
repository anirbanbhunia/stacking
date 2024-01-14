import "./../css/App.css";
import Nav from "./Nav";
import * as Util from "./../js/Util.js";
import { useState, useEffect } from "react";
import Tabular from "./Tabular.jsx";
import Summary from "./Summary.jsx";
import Graph from "./Graph.jsx";
function App() {
  const timerTimes = [5, 15, 30];

  const [timer, setTimer] = useState(timerTimes[0]); // will refresh every 5 secs
  const [showSummary, setShowSummary] = useState(true);
  const [showTable, setShowTable] = useState(true);
  const [showGraph, setShowGraph] = useState(true);

  const [startDate, setStartDate] = useState(
    new Date().setDate(new Date().getDate() - 14)
  );
  const [endDate, setEndDate] = useState(new Date());

  const [data, setData] = useState([]);

  // For Data update
  useEffect(() => {
    let ignore = false;

    if (
      endDate.getFullYear() != new Date().getFullYear() ||
      endDate.getMonth() != new Date().getMonth() ||
      endDate.getDate() != new Date().getDate()
    ) {
      return;
    }

    const link =
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=demo";

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(link, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (!ignore) setData(result["Time Series (Daily)"]);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });

    return () => (ignore = true);
  }, [timer]);

  const getNextTime = () => {
    let res = 0;
    let idx = timerTimes.indexOf(timer);
    if (idx < timerTimes.length - 1) res = idx + 1;
    return timerTimes[res];
  };
  // const renderData = data["Time Series (Daily)"];

  // const getFormattedData = () => {
  //   if (data.length === 0) return;
  //   var dateArr = Object.keys(data).toString().split(",");
  //   // dateArr.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  //   const startDateEpochTime = new Date(startDate).getTime();
  //   const endDateEpochTime = new Date(endDate).getTime();
  //   // console.log(startDateEpochTime, endDateEpochTime);
  //   dateArr = dateArr.filter((d) => {
  //     const epochTime = new Date(d).getTime();
  //     return epochTime >= startDateEpochTime && epochTime <= endDateEpochTime;
  //   });
  //   return dateArr;
  // };

  var dateArr = Object.keys(data).toString().split(",");
  const startDateEpochTime = new Date(startDate).getTime();
  const endDateEpochTime = new Date(endDate).getTime();
  dateArr = dateArr.filter((d) => {
    const epochTime = new Date(d).getTime();
    return epochTime >= startDateEpochTime && epochTime <= endDateEpochTime;
  });

  return (
    <div className="App">
      <Nav
        timer={timer}
        setTimer={setTimer}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        showSummary={showSummary}
        setShowSummary={setShowSummary}
        showTable={showTable}
        setShowTable={setShowTable}
        showGraph={showGraph}
        setShowGraph={setShowGraph}
        getNextTime={getNextTime}
      />

      {/* {showSummary ? <Summary data={data} dateArr={dateArr} /> : null} */}
      {showGraph ? <Graph data={data} dateArr={dateArr} /> : null}
      {showTable ? <Tabular data={data} dateArr={dateArr} /> : null}
    </div>
  );
}

export default App;
