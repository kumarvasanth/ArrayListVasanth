
import {list} from "./list";
import {FETCH_LIST} from "./Action"

const initialstatestate={
    city:[]
}

const Reducer =(state=initialstatestate,action)=>{
    switch (action.type) {
        case FETCH_LIST:
            return{
            ...state,
            city:list
         
        }
        default:
             return state
           
      }

};
export default Reducer;
