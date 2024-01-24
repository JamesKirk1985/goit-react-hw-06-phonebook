/* eslint-disable react-hooks/exhaustive-deps */
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../../redux/contactsSlice";


export const ContactForm = () => {  
  const dispatch = useDispatch()  
  const contacts = useSelector(state => state.contacts.contacts)
  
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


    
