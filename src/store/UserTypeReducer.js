const inc = {
    typecase: false,
}
const typecase = (state = inc,action) => {
    
    switch(action.type){
        case "TEACHER":
            return {
                ...state,
                typecase: true,
            };
        case "STUDENT":
            return {
                ...state,
                typecase: false,
            };
        default:
            return state;
    }
};
export default typecase;