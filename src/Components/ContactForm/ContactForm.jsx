import React, { Component } from "react"
import style from "./ContactForm.module.css"
import { addContact } from "../../redux/actions/actions.js"
import { connect } from "react-redux"
import AlertMessage from "../Alert/alert.js"

import { CSSTransition } from "react-transition-group"
import "../../Container/animation/alertAnimation.css"

const INITIAL_STATE = { name: "", number: "" }

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.props.contacts.find((item) => item.name === this.state.name)) {
      this.setState({ isExists: true })

      setTimeout(() => {
        this.setState({ isExists: false })
      }, 1500)
    } else {
      this.props.addContact(this.state)
    }

    this.reset()
  }

  reset = () => {
    this.setState({ ...INITIAL_STATE })
  }
  render() {
    const { name, number } = this.state

    return (
      <>
        <form onSubmit={this.handleSubmit} className={style.form}>
          <label>
            <h2 className={style.title}>Name</h2>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={this.handleChange}
              className={style.input}
            />
          </label>
          <label>
            <h2 className={style.title}>Phone</h2>
            <input
              type="text"
              name="number"
              placeholder="Enter phone"
              value={number}
              onChange={this.handleChange}
              className={style.input}
            />
          </label>
          <button type="submit" className={style.btn}>
            {" "}
            <span className={style.btnText}>add contact</span>
          </button>
        </form>
        <CSSTransition in={this.state.isExists} timeout={250} classNames="alert" unmountOnExit>
          <AlertMessage>{"Is already in contacts."}</AlertMessage>
        </CSSTransition>
      </>
    )
  }
}

const mapStateToProps = (state, props) => ({
  contacts: state.contacts,
})

// const mapDispatchToProps = ()=> ({
//   addContact: (contact)=>{dispatch(addContact(contact))}
// })

const mapDispatchToProps = { addContact }

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
