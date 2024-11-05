import "./App.css";
import Accordian from "./components/Accordian";
import LightDarkMode from "./components/DarkLightTheme";
import ImageSlider from "./components/ImageSlider";
import LoadMoreData from "./components/LoadMoreData";
import QRCodeGen from "./components/QRCode";
import RandomColorGen from "./components/RandomColorGen";
import StarRating from "./components/StarRating";
import ScrollIndicator from "./components/ScrollIndicator";
import ModalTest from "./components/CustomModal/modal-test";
import GitProfileFinder from "./components/GitProfileFinder";
import SearchAutoComplete from "./components/SearchAutoComplete";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColorGen /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={5} /> */}
      {/* <LoadMoreData /> */}
      {/* <QRCodeGen /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <ModalTest /> */}
      {/* <GitProfileFinder /> */}
      <SearchAutoComplete />
    </div>
  );
}

export default App;
