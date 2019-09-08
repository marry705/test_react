const initialState = {
    data: '',
    loading: false,
    error: false,
};

const state = (state = initialState, action) => {
    
    switch (action.type) {
        case 'REQUESTED':
            return {
              data: '',
              loading: true,
              error: false,
            };
        case 'SUCCEEDED':
            return {
              data: action.data,
              loading: false,
              error: false,
            };
        case 'FAILED':
            return {
              data: '',
              loading: false,
              error: true,
            };
        default:
            return state;
    }
};

export default state;