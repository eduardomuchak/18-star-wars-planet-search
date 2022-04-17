const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsInfo = async () => {
  const response = await fetch(endpoint);
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default getPlanetsInfo;
