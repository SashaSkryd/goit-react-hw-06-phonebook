import React from "react"
import ContactForm from "../Components/ContactForm/ContactForm.jsx"
import Filter from "../Components/Filter/Filter.jsx"
import ContactList from "../Components/ContactList/ContactList.jsx"
import Title from "../Components/Title/Title.js"

import { CSSTransition } from "react-transition-group"
import animation from "./animation/titleAnimation.module.css"
import style from "./App.module.css"

const App = () => {
  // state = {
  //   contacts: [],
  //   filter: "",
  //   alertMessage: '',
  // }

  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem('Contacts'))
  //   if (contacts) {
  //      this.setState({contacts})
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //   localStorage.setItem('Contacts', JSON.stringify(this.state.contacts))
  //   };
  // }

  // addContact = el => {
  //   if (this.state.contacts.find(item => item.name === el.name)) {
  //     this.setState({ alertMessage: 'Is already in contacts.' });
  //     setTimeout(() => {
  //       this.setState({ alertMessage: '' });
  //     }, 1500);
  //   } else {
  //     // this.setState(prevState => {
  //     //   const updateState = [...prevState.contacts, el];
  //     //   return { contacts: updateState, alertMessage: '' };
  //     // });
  //     this.props.addContact(el)
  //   }
  // };

  // getVisibleContact = () => {
  //   const { contacts, filter } = this.state
  //   return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
  // }

  // handleDelete = (id) => {
  //   const { contacts } = this.state
  //   const obj = contacts.find((el) => el.id === id)
  //   const index = contacts.indexOf(obj)
  //   this.setState((prevState) => ({
  //     contacts: [...prevState.contacts.slice(0, index), ...prevState.contacts.slice(index + 1)],
  //   }))
  //   this.reset();
  // }

  //   reset = () => {
  //   this.setState({ filter: '' });
  // };

  // filterRender = (filter) => {
  //   this.setState({ filter })
  // }

  // render() {
  // const { filter, contacts } = this.state
  // const visibleContact = this.getVisibleContact()

  return (
    <>
      <div className={style.container}>
        <CSSTransition in={true} appear={true} classNames={animation} unmountOnExid timeout={500}>
          <Title title="Phonebook" />
        </CSSTransition>
        {/* <ContactForm addContact={this.addContact} /> */}
        <ContactForm />
        {/* {contacts.length > 1 && <Filter filter={filter} filterRender={this.filterRender} />} */}
        <Filter />
        {/* <ContactList array={visibleContact} deleteItem={this.handleDelete} /> */}
        <ContactList />
      </div>
    </>
  )
  // }
}

export default App
