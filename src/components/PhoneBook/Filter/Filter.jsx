import { useDispatch } from 'react-redux'
import { setStatusFilter } from '../../../redux/filterSlice'
import css from './Filter.module.css'

export const Filter = () => {
    const dispatch = useDispatch()
    function inputChange({ target: { value } }) { 
        console.log(setStatusFilter(value))
        dispatch(setStatusFilter(value))                
    }    

        return (
            <label className={ css.label}>
                Find contacts by name<br/>
                <input
                    className={css.input}
                    type="text"
                    name="filter"
                    onChange={inputChange}
                    required />
            </label>
        )
    
}