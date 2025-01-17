import { useState, useEffect } from "react";

const useSpotifyToken = (clientId: string, clientSecret: string) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: clientId,
            client_secret: clientSecret,
          }),
        });
        const data = await response.json();
        setAccessToken(data.access_token); // Set the access token
      } catch (error) {
        console.error("Error fetching access token:", error);
        setAccessToken(null); // Handle failure
      }
    };

    getAccessToken();
  }, [clientId, clientSecret]);

  return accessToken;
};

export default useSpotifyToken;
