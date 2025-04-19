import "./App.css";
import { AppContextProvider } from "./context/AppContext";
import Navigation from "./components/common/Navigation/Navigation";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Modal from "./components/common/Modal/Modal";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Modal />
        <Navigation />
        <PhotoGallery />
      </div>
    </AppContextProvider>
  );
}

export default App;
