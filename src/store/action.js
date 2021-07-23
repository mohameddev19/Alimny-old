const login = () => {
    return {
        type: "LOGIN",
    }
};
const logout = () => {
    return {
        type: "LOGOUT",
    }
};
const teacher = () => {
    return {
        type: "TEACHER",
    }
};
const student = () => {
    return {
        type: "STUDENT",
    }
};
export {login, logout, teacher, student};