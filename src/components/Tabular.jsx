export default function Tabular({ data, dateArr }) {
  const tableData = () => {
    if (data.length == 0) return;
    // var dateArr = Object.keys(data).toString().split(",");
    return dateArr.map((x) => {
      var dataObj = Object.values(data[x]);
      dataObj = dataObj.map((x) => Math.round(x * 100) / 100);
      return (
        <tr key={x.toString()}>
          <th scope="row">{x.toString()}</th>
          <td>{dataObj[0]}</td>
          <td>{dataObj[1]}</td>
          <td>{dataObj[2]}</td>
          <td>{dataObj[3]}</td>
          <td>{dataObj[4]}</td>
        </tr>
      );
    });
  };

  return (
    <div className="tabularData">
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Open</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Close</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>
        <tbody>{tableData()}</tbody>
      </table>
    </div>
  );
}
