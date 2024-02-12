import React, { useReducer} from 'react'
import FunctInput from '../../components/FunctInput'
import HoldsList from './HoldsList'
import { useListContext } from '../../Context/CurrentList';
const initial = {
  Product:"",
  Cost:0,
  Category:"Groceries" // Starting value
}
const categories = ['Groceries', 'Gas', 'Resteraunts', 'Clothes', 'Suppliments', 'LivingExpenses', 'Other'];
const reducer = (state, action)=>{
  switch(action.type)
      {
          case 'Product':
              return {...state, Product : action.value}
          case 'Cost':
              return {...state, Cost : action.value}
          case 'Category':
            return {...state, Category : action.value}
          default:
              return state
      }
}

function Top() {
  const { CurrentList } = useListContext();
  const [item, dispatch ]= useReducer(reducer, initial)
  const button3 = (e) =>{
    dispatch({type: 'Category', value: e.target.value})
  }
  return (
    
    <div>
        <h2>Current List: {CurrentList}</h2>

        <div className='inputGroup'>
    
  <label style={{ marginRight: '10px' }}>Product Name:</label>
 <FunctInput handleInput={dispatch} curr="Product" style={{ marginRight: '10px' }} />
  <label style={{ marginRight: '10px' }}>Cost Name:</label>
  <FunctInput handleInput={dispatch} curr="Cost" style={{ marginRight: '10px' }} />
  <label style={{ marginRight: '10px' }}>Category Name:</label>
  <select onChange={button3}>
                    {/* Map over the list names and generate options */}
                    {categories.map((CatName, index) => (
                        <option key={index} value={CatName}>
                            {CatName}
                        </option>
                    ))}
                </select>
</div>




        <HoldsList props = {item}></HoldsList>
    </div>
  )
}

export default Top