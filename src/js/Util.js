export async function fetchData() {
  const link =
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=demo";

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(link, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      alert(error);
      return error;
    });
}
