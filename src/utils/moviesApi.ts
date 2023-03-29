export async function loadNowPlayingMovies() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/api/v1/movies/now_playing`);
  const data = await response.json();
  return data;
}

export async function loadPopularMovies() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/api/v1/movies/popular`);
  const data = await response.json();
  return data;
}
