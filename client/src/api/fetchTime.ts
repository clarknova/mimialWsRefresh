export async function fetchDogs() {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/Berlin"
  );
  const result = await response.json();
  return result;
}
