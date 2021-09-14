import 'tailwindcss/tailwind.css'
import { Provider, createClient } from 'urql';

// fetchOptions: () => {
//   const token = getToken()
//   return {
//     headers: { authorization: token ? `Bearer ${token}` : '' }
//   }
// },
const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include"
  }
})

function MyApp({ Component, pageProps } : any) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
