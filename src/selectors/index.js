export const getToken = state => {
    if (state.auth) {
        return state.auth
    } else {
        return '';
    }
};