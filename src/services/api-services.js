const baseURL = "https://swapi.dev/api"

export const getPeople = async (page) => {
  const response = await fetch(`${baseURL}/people/?page=${page}`);
  const data = await response.json()
  return data
};

export const getPlanets = async (id) => {
  const response = await fetch(`${baseURL}/planets/${id}`)
  const data = await response.json()
  return data
}

export const getStarships = async (id) => {
  const response = await fetch(`${baseURL}/starships/${id}`)
  const data = await response.json()
  return data
}

export const getVehicles = async (id) => {
  const response = await fetch(`${baseURL}/vehicles/${id}`)
  const data = await response.json()
  return data
}

export const getFilms = async (id) => {
  const response = await fetch(`${baseURL}/films/${id}`)
  const data = await response.json()
  return data
}

export const getSpecies = async (id) => {
  const response = await fetch(`${baseURL}/species/${id}`)
  const data = await response.json()
  return data
}

export const getDetails = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}