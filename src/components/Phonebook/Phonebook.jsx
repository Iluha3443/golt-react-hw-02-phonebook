import React from "react";
import { nanoid } from 'nanoid';

class PhoneBook extends React.Component {
     
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
     

    
    handleSubmit = (evt) => {
        evt.preventDefault();
        const nameContact = evt.target.name.value;
        const numberTel = evt.target.number.value;

        if (nameContact === '') {
            alert('Заповніть поле name');
            return; 
        }
        if (numberTel === '') {
            alert('Заповніть поле number');
            return; 
        }


        this.setState(prevState => ({
            contacts: [...prevState.contacts, { id: nanoid(), name: nameContact, number:numberTel }]
        }))
    }

    searchByName = (e) => {
        const { contacts,filter } = this.state;
        const nameInput = e.target.value.toLowerCase();
        const searchResults = contacts.filter((contact) => contact.name.toLowerCase().includes(nameInput));
        console.log(searchResults)
        if (searchResults.length > 0) {
          this.setState({filter:nameInput})
        }   
    }


    render() {
        const { contacts, filter } = this.state;
        const filteredContacts = contacts.filter(
      (contact) => contact.name.toLowerCase().includes(filter) 
    )
         return (
             <>
                
                 <form onSubmit={this.handleSubmit}>
                     <h2>PhoneBook</h2>
                     <label >Name
                         <input
                             type="text"
                             name="name"
                             pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                             required
                         />
                     </label>
                     <label >Number
                        <input
                      type="tel"
                  name="number"
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
                      />
                     </label>
                     <button  type="submit">Add contact</button>
                 </form>
                
                 <h2>Contacts</h2>
                 <div>
                     <label htmlFor=""><input onChange={this.searchByName} type="text" /></label>
                     <ul>
                    
                     {filteredContacts.map(contact => (
                         <li key={contact.id}>{contact.name}: {contact.number}</li>
                     )
                     )}
                 </ul>
                 </div>
             </>
         )
    }
}

export default PhoneBook;

