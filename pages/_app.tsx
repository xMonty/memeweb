import 'tailwindcss/tailwind.css'
import { Provider, createClient } from 'urql';

const client = createClient({
  url: "https://rickandmortyapi.com/graphql",  
  fetchOptions: {
    credentials: "include"
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
