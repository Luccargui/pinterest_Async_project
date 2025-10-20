import { apiUnsplash, setupSearchListeners } from "./components/createAPI/createApi";
import { createHeader } from "./components/Header/Header";
import "./style.css";


createHeader();
apiUnsplash(); // load default photos
setupSearchListeners(); // enable search
