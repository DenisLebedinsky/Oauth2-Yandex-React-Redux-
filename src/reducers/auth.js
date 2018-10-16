const initialState = '';

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case '@@router/LOCATION_CHANGE': {
            if (payload.hash) {
                return /access_token=([^&]+)/.exec(payload.hash)[1];
            } else {
                return state;
            }
        }
        default:
            return state;
    }
}