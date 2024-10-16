import "./App.css";
import Accordian from "./components/Accordian";
import ImageSlider from "./components/ImageSlider";
import RandomColorGen from "./components/RandomColorGen";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="App">
      {/* <Accordian />
      <RandomColorGen /> */}
      {/* <StarRating noOfStars={10} /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={5} />
    </div>
  );
}

export default App;
