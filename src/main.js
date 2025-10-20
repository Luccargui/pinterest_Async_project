import { apiUnsplash, setupSearchListeners } from "./components/createApi/createApi";
import { createHeader } from "./components/header/header";
import "./style.css";


createHeader();
apiUnsplash();
setupSearchListeners();
