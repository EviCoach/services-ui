const initialState = {};

const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case action.GET_SERVICES:
            return state;

        default:
            return state;
    }
}

export default serviceReducer;