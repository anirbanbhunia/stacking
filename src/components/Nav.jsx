import timerImg from "./../assets/timer.svg";
export default function Nav({
  timer,
  setTimer,
  setStartDate,
  setEndDate,
  showSummary,
  setShowSummary,
  showTable,
  setShowTable,
  showGraph,
  setShowGraph,
  getNextTime,
  startDate,
  endDate,
}) {
  const getCurrentDateInput = (dateObj) => {
    // const dateObj = new Date();

    // get the month in this format of 04, the same for months
    const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    const day = ("0" + dateObj.getDate()).slice(-2);
    const year = dateObj.getFullYear();

    const shortDate = `${year}-${month}-${day}`;
    // console.log(shortDate);
    return shortDate;
  };
  return (
    <div className="">
      <div className="timeframe">
        <div className="startDate">
          From
          <input
            className="bg-gray-900 rounded-md justify-center px-2"
            type="date"
            value={getCurrentDateInput(new Date(startDate))}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="endDate">
          To
          <input
            type="date"
            value={getCurrentDateInput(new Date(endDate))}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <div className="refreshTimer align-middle">
        <button onClick={() => setTimer(getNextTime())}>
          <div className="timerIcon">
            <img src={timerImg} className="fill-slate-50" alt="Timer image" />
            <span>{timer} secs</span>
          </div>
        </button>
      </div>
      <div className="graphCheckBox">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="graphCheckBox"
            checked={showGraph}
            onChange={() => setShowGraph(!showGraph)}
          />
          <label className="form-check-label" htmlFor="graphCheckBox">
            Bar Chart
          </label>
        </div>
      </div>
      <div className="SummaryCheckBox">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="summaryCheckBox"
            checked={showSummary}
            onChange={() => setShowSummary(!showSummary)}
          />
          <label className="form-check-label" htmlFor="summaryCheckBox">
            Summary
          </label>
        </div>
      </div>
      <div className="TabularCheckBox">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="tabualarCheckBox"
            checked={showTable}
            onChange={() => setShowTable(!showTable)}
          />
          <label className="form-check-label" htmlFor="tabualarCheckBox">
            Tabular Data
          </label>
        </div>
      </div>
    </div>
  );
}
