import axios from 'axios';
import {AppUrls} from '../../assets/AppUrls';
import {
  CLEAR_ALL,
  saveCarousellist,
  saveGridllist,
  SAVE_CAROUSEL_ITEMS,
  SAVE_GRID_ITEMS,
} from '../actions/Actions';

const initialState = {
  carouselList: [],
  gridList: [],
};

export const fetchCarouselList = () => async dispatch => {
  let list = await axios.get(AppUrls.baseUrl + AppUrls.getCarouselImages);
  if (list.data.length > 0) {
    dispatch(saveCarousellist(list.data));
  }
};

export const fetchGridlList = () => async dispatch => {
  let list = await axios.get(AppUrls.baseUrl + AppUrls.getGridImages);
  if (list.data.length > 0) {
    dispatch(saveGridllist(list.data));
  }
};

const listItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CAROUSEL_ITEMS:
      return {...state, carouselList: action.data};

    case SAVE_GRID_ITEMS:
      return {...state, gridList: action.data};

    case CLEAR_ALL:
      return {...state, gridList: [], carouselList: []};

    default:
      return state;
  }
};

export default listItemReducer;
