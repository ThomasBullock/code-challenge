
import { fromJS } from 'immutable';

export const SET_PAGINATION_PAGE = 'ui/SET_PAGINATION_PAGE';
export const SET_PER_PAGE = 'ui/SET_PER_PAGE';

const initialState = fromJS({
  page: 1,
  per_page: 10
})

export default (state = initialState, action) => {
  console.log(action);
	switch (action.type) {
	case SET_PAGINATION_PAGE:
		return state.update('page', (value) => action.pageNumber);  			
	default:
		return state;		
	} 
};


export const setPaginationPage = (pageNumber) => {
    return dispatch => {
      dispatch({
        type: SET_PAGINATION_PAGE, 
        pageNumber, 
      })
    }
}

export const setPerPage = (perPage) => {
  return dispatch => {
    dispatch({
      type: SET_PER_PAGE,
      perPage
    })
  }
}

