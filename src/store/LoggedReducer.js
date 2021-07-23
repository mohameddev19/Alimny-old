const inc = {
    logcase: false,
}
const logcase = (state = inc,action) => {
    
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                logcase: true,
            };
        case "LOGOUT":
            return {
                ...state,
                logcase: false,
            };
        default:
            return state;
    }
};
export default logcase;