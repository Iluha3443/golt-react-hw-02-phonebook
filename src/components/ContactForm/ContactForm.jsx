import css from './ContactForm.module.css'
import PropTypes from 'prop-types';


export const ContactForm = ({ Submit }) => {

    return (
        <>
            <h2 className={css.title} >  PhoneBook</h2>
        <form className={css.form} onSubmit={Submit}>
            <label ><span className={css.nameForm}>Name</span>
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label ><span className={css.nameForm} >Number</span>
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={css.add} type="submit">Add contact</button>
            </form>
             </>
    )
};

ContactForm.propTypes = {
    Submit: PropTypes.func
};