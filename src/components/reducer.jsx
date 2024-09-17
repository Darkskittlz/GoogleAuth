const initialState = {
  ratingValue: null,
  hoverValue: null,
  hoverIndex: 0,
  valueIndex: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case "PointerMove":
      return {
        ...state,
        hoverValue: action.payload,
        hoverIndex: action.index,
      };

    case "PointerLeave":
      return {
        ...state,
        ratingValue: state.ratingValue,
        hoverIndex: 0,
        hoverValue: null,
      };

    case "MouseClick":
      return {
        ...state,
        valueIndex: state.hoverIndex,
        ratingValue: action.payload,
      };

    default:
      return state;
  }
}

