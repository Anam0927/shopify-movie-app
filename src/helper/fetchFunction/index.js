require('dotenv').config();
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

// -- search fetch
async function getMovies(searchTerm, page = 1) {
  try {
    let searchResultFetch = await fetch(
      `https://www.omdbapi.com/?s=${encodeURI(
        searchTerm
      )}&page=${page}&type=movie&apikey=${API_KEY}`
    );

    let searchResult = await searchResultFetch.json();
    if (searchResult.Response === 'False') {
      throw new Error(searchResult.Error);
    }

    return searchResult;
  } catch (e) {
    throw new Error(e);
  }
}
// -- nominee fetch
async function getNominee(id) {
  try {
    let searchResultFetch = await fetch(
      `https://www.omdbapi.com/?i=${id}&type=movie&apikey=${API_KEY}`
    );

    let searchResult = await searchResultFetch.json();
    if (searchResult.Response === 'False') {
      throw new Error(searchResult.Error);
    }

    return searchResult;
  } catch (e) {
    throw new Error(e);
  }
}

export { getMovies, getNominee };
