import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'
import { Provider, createClient } from 'urql';
import { getAccessToken, setAccessToken } from '../src/utils/token';

function MyApp({ Component, pageProps } : any) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include"
    }).then(async x => {
      const { accessToken } = await x.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  const client = createClient({
    url: "http://localhost:4000/graphql",
    fetchOptions: () => {
      const token = getAccessToken();
      return {
        credentials: "include",
        headers: { authorization: token ? `Bearer ${token}` : '' }
      }
    }
  })

  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
