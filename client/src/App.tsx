import { DogImage } from "./component/DogImage";

function App() {
  return (
    <div>
      <DogImage queryKey="dog" />
      <DogImage queryKey="dog2" />
    </div>
  );
}

export default App;
