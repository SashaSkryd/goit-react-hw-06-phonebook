// Without Toolkit
// //импортируем весь файл екшон и представляем его как обьект с именем екшонс
import shortid from "short-id"

// import { ADD_CONTACT, REMOVE_CONTACT, CHANGE_FILTER } from "../actionsTypes.js"

// //деструктуризируем наш обьект екшенов
// import { combineReducers } from "redux"

import { createReducer } from "@reduxjs/toolkit"
import { addContact, removeContact, filterContact } from "../actions/actions.js"


const getStorageContacts = JSON.parse(localStorage.getItem("Contacts")) || [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
]

const initialState = {
  contacts: getStorageContacts,
  filter: "",
}

// const contactsReducer = (state = initialState.contacts, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...state, { ...payload, id: shortid.generate() }]
//     case REMOVE_CONTACT:
//       return state.filter((contact) => {
//         return contact.id !== payload
//       })

//     default:
//       return state
//   }
// }

// const filterReducer = (state = initialState.filter, { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload
//     default:
//       return state
//   }
// }

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// })

const createAddContact = (state, actions) => {
  return [...state, { ...actions.payload, id: shortid.generate() }]
}

const createRemoveContact = (state, actions) => {
  return state.filter((contact) => {
    return contact.id !== actions.payload
  })
}

const createContactsReducer = createReducer(initialState.contacts, {
  [addContact]: createAddContact,
  [removeContact]: createRemoveContact,
})

const createFilterReducer = createReducer(initialState.filter, {
  [filterContact]: (state, actions) => actions.payload,
})

export { createContactsReducer, createFilterReducer }
