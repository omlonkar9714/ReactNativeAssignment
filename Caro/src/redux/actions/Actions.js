//actions
export const GET_CAROUSEL_ITEMS = 'GET_CAROUSEL_ITEMS';
export const SAVE_CAROUSEL_ITEMS = 'SAVE_CAROUSEL_ITEMS';
export const GET_GRID_ITEMS = 'GET_GRID_ITEMS';
export const SAVE_GRID_ITEMS = 'SAVE_GRID_ITEMS';
export const CLEAR_ALL = 'CLEAR_ALL';

//actions creators

export const clearAll = () => {
  return {
    type: CLEAR_ALL,
  };
};

export const saveCarousellist = data => {
  return {
    type: SAVE_CAROUSEL_ITEMS,
    data,
  };
};

export const saveGridllist = data => {
  return {
    type: SAVE_GRID_ITEMS,
    data,
  };
};
