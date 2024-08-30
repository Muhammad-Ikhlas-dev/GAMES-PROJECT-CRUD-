import {createContext} from 'react';

const methodContext=createContext({
    deleteGame:null,
    updateGame:null,
    addGame:null
})

export default methodContext;