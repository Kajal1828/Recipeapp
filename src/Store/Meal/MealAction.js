import { FETCH_SUCCESS , FETCH_REQUEST , FETCH_FAILURE, SEARCH ,URL,FILTER} from "./MealType";

export const fetchSuccess = (data)=>{
    return {
        type: FETCH_SUCCESS,
        payload: data ,
    }
}

export const fetchFailure =(data) =>{
    return{
        type: FETCH_FAILURE,
        payload: data
    }
}
export const fetchRequest =() =>{
    return{
        type: FETCH_REQUEST,
    }
}


export const Url =(changedUrl)=>{
    return{
        type:URL,
        payload:changedUrl
    }
}

export const filter = ()=>({
    type:FILTER
})