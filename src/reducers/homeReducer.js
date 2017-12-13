let initialState = {
  rules: true,
  counter: 0,
  questions: []
}

const homeReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      console.log(action.payload);
      return { ...state, questions: action.payload };
    default:
      return state;
  }
}

export default homeReducer;
