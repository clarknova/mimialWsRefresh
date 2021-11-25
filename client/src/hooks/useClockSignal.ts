import { useEffect } from "react";
import { useQueryClient } from "react-query";

export function useClockSignal() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const client = new WebSocket("ws://localhost:8080");
    client.addEventListener("message", function (event) {
      const data = JSON.parse(event.data);
      console.log(data);
      queryClient.invalidateQueries(data);
    });
    client.addEventListener("open", function (event) {
      console.log("connected");
    });
    return () => client.close();
  }, []);
}
