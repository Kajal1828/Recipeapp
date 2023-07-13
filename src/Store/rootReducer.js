import { combineReducers } from "redux";
import { MealReducer } from "./Meal/MealReducer";

 export const rootReducer = combineReducers({
    meal: MealReducer
})