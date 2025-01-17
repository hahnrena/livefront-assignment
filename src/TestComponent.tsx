import React, { useEffect, useState } from "react";
import useSpotifyToken from "./hooks/useSpotifyToken";

const TestComponent = ({
  clientId,
  clientSecret,
}: {
  clientId: string;
  clientSecret: string;
}) => {
  const accessToken = useSpotifyToken(clientId, clientSecret);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (accessToken) {
      setToken(accessToken);
    }
  }, [accessToken]);

  return (
    <div>
      <p>{token ? `Access Token: ${token}` : "Loading..."}</p>
    </div>
  );
};

export default TestComponent;
