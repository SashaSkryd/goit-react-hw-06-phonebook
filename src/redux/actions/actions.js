// Wihhout Toolkit
// import {ADD_CONTACT, REMOVE_CONTACT, CHANGE_FILTER} from '../actionsTypes.js'

// export const addContact = (contact) => ({
//     type: ADD_CONTACT,
//     payload: contact,
// })

// export const removeContact = (id) => ({
//      type: REMOVE_CONTACT,
//     payload: id,
// })

// export const filterContact = (filter) => ({
//     type: CHANGE_FILTER,
//     payload: filter,
// })
import { createAction } from '@reduxjs/toolkit'

const addContact = createAction('ADD_CONTACT')
const removeContact = createAction('REMOVE_CONTACT')
const filterContact = createAction('CHANGE_FITER')

export {addContact,removeContact,filterContact}