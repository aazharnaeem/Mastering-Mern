

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'login':
            localStorage.setItem('token', action.payload.token);
            return action.payload.token;
        case 'logout':
            localStorage.removeItem('token');
            return {}
        default:
            return state
    }
}
export default authReducer