import initData from '../origdata'
import Immutable from 'immutable';

export const SORT_DATA = 'data/SORT_DATA';


const initialState = Immutable.fromJS(initData)


export default (state = initialState, action) => {
  switch(action.type) {
    case SORT_DATA:
    return state.sort( (a, b) => {
      if(action.payload !== 'title') {
        return b.get(action.payload) - a.get(action.payload);
      } else {
        if(a.get(action.payload) < b.get(action.payload)) { return -1; }
        if(a.get(action.payload) > b.get(action.payload)) { return 1; }
        return 0;
      }
    });
    

    default:
    return state
  }
}

export const sortData = (catergory) => {
  return dispatch => {
    dispatch({
      type: SORT_DATA,
      payload: catergory
    })

    dispatch({
      type: SORT_DATA,      
      payload: catergory
    })
  }
}