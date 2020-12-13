// import { createStore } from 'redux'
// import {rootReducer} from '../redux/reducers/reducer.js'
// import {composeWithDevtools} from 'redux-devtools-extension'

import { configureStore } from "@reduxjs/toolkit"
import { createContactsReducer, createFilterReducer } from "../redux/reducers/reducer.js"

// Without Toolkit
// const store = createStore(rootReducer, composeWithDevtools, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// export default store

const store = configureStore({
  reducer: {
    contacts: createContactsReducer,
    filter: createFilterReducer,
  },
})

store.subscribe(() => {
  localStorage.setItem("Contacts", JSON.stringify(store.getState().contacts))
})

export default store
