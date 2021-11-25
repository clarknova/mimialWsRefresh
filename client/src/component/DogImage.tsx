import { useQuery } from "react-query";
import { fetchDogs } from "../api/fetchDogs";
import { useClockSignal } from "../hooks/useClockSignal";
interface DogImage {
  queryKey: string;
}
export function DogImage({ queryKey }: DogImage) {
  const query = useQuery(queryKey, fetchDogs);

  useClockSignal();
  return query.isLoading ? (
    <div>loading...</div>
  ) : (
    <div className="App">
      <img style={{ height: "300px" }} src={query.data.message} />
      <pre>{JSON.stringify(query.data, null, 2)}</pre>
    </div>
  );
}
