let data;

console.log(data);

fetch("data.json")
  .then(response => response.json())
  .then(json => logData(json));

function logData(json) {
  data = json;
  console.log(data);
}

