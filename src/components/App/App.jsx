// import { useState, useEffect } from "react";
import { ContactForm } from "../PhoneBook/ContactForm/ContactForm";
import { Filter } from "../PhoneBook/Filter/Filter";
import { ContactList } from "../PhoneBook/ContactList/ContactList";
import css from './App.module.css'

export const App = () => {
 
  // useEffect(() => {
  //   const storageContact = localStorage.getItem('contacts')   
  //   if (storageContact && storageContact.length>0) 
  //   {setContacts( JSON.parse(storageContact) )} 
  // }, [])

  // useEffect(() => {         
  // localStorage.setItem("contacts", JSON.stringify(contacts))    
  // },[contacts])
  
   
  
    return (    
      <div>
        <ContactForm  />        
        <h2 className={css.title}>Contacts</h2>  
        <Filter  />        
        <ContactList />                  
      </div>
    )
    
}
  
