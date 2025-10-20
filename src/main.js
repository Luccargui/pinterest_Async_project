import { apiUnsplash, setupSearchListeners } from "./components/createApi/createApi";
import { createHeader } from "./components/Header/Header";
import "./style.css";


createHeader();
apiUnsplash();
setupSearchListeners();
