
import {combineReducers,createStore} from "redux"
import { NotesReducers } from "./reduxes/NotesReducers"
import { PostReducer } from "./reduxes/PostReduces"
import { UserReducer } from "./reduxes/UserReducers"


const combinedReducers =combineReducers({
    userInfo:UserReducer,
    postInfo:PostReducer,
    notesInfo:NotesReducers
})


export const store = createStore(combinedReducers)
 