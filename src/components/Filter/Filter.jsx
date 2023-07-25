import PropTypes from 'prop-types';
import css from './Filter.module.css'
export const Filter = ({ Search }) => {


    
    return (
        <>
            <h2 className={css.title}>Contacts</h2>
            <div className={css.container}>
              <label>
                <input className={css.input} onChange={Search} type="text" />
            </label>
            </div>
           
        </>
    )
};

Filter.propTypes = {
    Search: PropTypes.func
};