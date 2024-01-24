import { ContactForm } from "../PhoneBook/ContactForm/ContactForm";
import { Filter } from "../PhoneBook/Filter/Filter";
import { ContactList } from "../PhoneBook/ContactList/ContactList";
import css from './App.module.css'

export const App = () => { 
  
   
  
    return (    
      <div>
        <ContactForm  />        
        <h2 className={css.title}>Contacts</h2>  
        <Filter  />        
        <ContactList />                  
      </div>
    )
    
}
  
