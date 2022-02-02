import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import imagesReducer from "./loadingReducer";
import errorReducer from "./loadingReducer";


const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
});

export default rootReducer;