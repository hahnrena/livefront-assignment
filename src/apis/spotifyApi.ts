export const fetchTopTracks = async (artistId, searchParameters) => {
  const albumTracksUrl = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`;

  try {
    const response = await fetch(albumTracksUrl, searchParameters);

    // Check for successful response
    if (!response.ok) {
      throw new Error(
        `Failed to fetch top tracks with status: ${response.status}`
      );
    }

    const data = await response.json();
    return [...new Set(data.tracks)];
  } catch (err) {
    console.error("Failed to fetch album tracks", err);
    return []; // Return an empty array in case of an error
  }
};
