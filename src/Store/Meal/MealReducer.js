import { FETCH_FAILURE, FETCH_SUCCESS, FETCH_REQUEST, SEARCH,URL,FILTER } from "./MealType";

const initialState = {
    data: [],
    error: "",
    filterData:false,
    loading: false,
    url:"https://www.themealdb.com/api/json/v1/1/search.php?f=a"
}

export const MealReducer = (state = initialState, action) => {
    const {type,payload}=action;
    switch (type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false,
                error: ""
            }
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_FAILURE:
            return {
                ...state,
                data: [],
                loading: false,
                error: payload
            }
     
        case URL : return{
            ...state,
            url:payload
        }
        case FILTER:return{
            ...state,
            filterData:!state.filterData
        }
        default:
            return state;
    }
}