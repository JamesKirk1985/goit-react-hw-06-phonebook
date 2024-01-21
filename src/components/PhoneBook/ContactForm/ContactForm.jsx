/* eslint-disable react-hooks/exhaustive-deps */
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../../redux/contactsSlice";
import { useEffect } from 'react';

export const ContactForm = () => {  
  const dispatch = useDispatch()  
  const contacts = useSelector(state => state.contacts)


  useEffect(() => {
    
    const storageData = localStorage.getItem('contacts')
    if (storageData) 
    {
      const array = JSON.parse(storageData);
      array.forEach(element => {
        if (contacts.some((item) => item.name === element.name)) { return }
        dispatch(addContact(element))        
      });      
    }     
  }, [])
  
  useEffect(() => {         
  localStorage.setItem("contacts", JSON.stringify(contacts))    
  },[contacts])

  
  function handelSubmit (e)  {
    e.preventDefault()    
    const contactObj = {
            name: e.target.name.value,
            number: e.target.number.value,
            id: nanoid()
    }
    if (contacts.some(({ name }) => (contactObj.name.trim() === name.trim()))) {
      alert(`${contactObj.name.trim()} is already in contacts`)
      return
      }  
    dispatch(addContact(contactObj))       
  }
 
return (
          <form className={css.form } onSubmit={handelSubmit}>
            <label className={css.label }>
                Name<br/>
              <input
                className={css.input }
                type="text"
                name="name"               
                required />
          </label>
          <label className={css.label }>
            Number<br/>
              <input
              className={css.input }
              type="tel"
              name="number"              
              required />
          </label >
            <button className={css.button } type="submit">Add contact</button>
      </form>  )

}


    
