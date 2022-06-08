const CHECK_STATUS = 'CHECK_STATUS'
const initialState = {
    list: []
}

const checkStatus = () => {
    return {
        type: CHECK_STATUS
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHECK_STATUS:
            return "Under construction";
        default: 
            return state
    }
}

export {checkStatus};

export default reducer;
