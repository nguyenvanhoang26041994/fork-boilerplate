export const initState = {
  code: 'en',
};

const languageReducer = (state = initState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
};

export default languageReducer;
