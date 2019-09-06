import {combineReducers} from "redux"

import {events} from "./event.js"
import {popup} from './popup.js'

export default combineReducers({events, popup})