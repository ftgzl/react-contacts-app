import {useState, useEffect} from 'react'
import { defaultContacts } from '../Example.js'

import './styles.css'

import Form from './Form'
import List from './List'

function Contacts() {
  const [contacts, setContacts] = useState(defaultContacts) //default contact is an array

  useEffect(() => {
    console.log(contacts);  
  }, [contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts
