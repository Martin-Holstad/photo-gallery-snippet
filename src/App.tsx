import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Modal from "./components/common/Modal/Modal";
import Navigation from "./components/common/Navigation/Navigation";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Favorites from "./components/Favorites/Favorites";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Modal />
        <Navigation />
        <Routes>
          <Route path="/" element={<PhotoGallery />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
