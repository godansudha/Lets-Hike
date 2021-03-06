/* eslint-disable no-undef */
function search(lat, lon, cb) {

  return fetch(`http://localhost:3001/api/getTrails?lat=${lat}&lon=${lon}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

function getGroups() {
  try {
    //return google.login(data.username, data.password).then(token => { return token } )
    return fetch(`http://localhost:3001/api/getGroups`, {
      accept: "application/json"
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb => {return cb});
} catch (error) {
  let er = error;
}
}

const Client = { getGroups, search };
export default Client;
