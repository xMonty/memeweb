import { useQuery } from 'urql';

const TodosQuery = `
  query {
    characters {
      info {
        count
      },
      results {
        id,
        name
      }
    }
  }
`;


export default function Home() {
  const [result, reexecuteQuery] = useQuery({
    query: TodosQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {JSON.stringify(data)}
    </div>
  )
}
