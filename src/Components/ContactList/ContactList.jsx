import React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import PropTypes from "prop-types"
import style from "./ContactList.module.css"
import { connect } from "react-redux"

import "../../Container/animation/listAnimation.css"
import { removeContact } from "../../redux/actions/actions.js"

const ContactList = ({ array, deleteItem }) => {
  return (
    <TransitionGroup component="ul" className={style.list}>
      {array.map((item) => (
        <CSSTransition key={item.id} timeout={250} classNames="item">
          <li className={style.listItem} key={item.id}>
            <span className={style.deskription}>{item.name}</span>
            <span className={style.deskription}>{item.number}</span>
            <button type="button" onClick={() => deleteItem(item.id)} className={style.btn}>
              <span className={style.btnText}>X</span>
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

ContactList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteItem: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return { array: state.contacts.filter((contact) => contact.name.toLowerCase().includes(state.filter.toLowerCase())) }
}
const mapDispatchToProps = {
  deleteItem: removeContact,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
