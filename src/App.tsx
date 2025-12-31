import ImageCarousel from "./components/ImageCarousel";

function App() {
  return (
    <div className="flex min-h-screen bg-amber-10flex flex-col items-center justify-between h-screen w-full bg-amber-50">
      <ImageCarousel url={`https://picsum.photos/v2/list`} limit={7} page={3} />
    </div>
  );
}

export default App;
