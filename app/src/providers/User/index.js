import React from 'react';

const userDefault = {
    id: 0,
    email: "",
    username: "",
}
const userContext = React.createContext({user: userDefault});

export { userContext };