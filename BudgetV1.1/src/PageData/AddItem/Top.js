import React, { useReducer} from 'react'
import FunctInput from '../../components/FunctInput'
import HoldsList from './HoldsList'
import { useListContext } from '../../Context/CurrentList';
const initial = {
  Product:"",
  Cost:0,
  Category:""
}
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

  return (
    
    <div>
        <h2>Current List: {CurrentList}</h2>
<div className='Title'>
  <div className='inputGroup'>
    <h3>Product Name:</h3>
    <FunctInput handleInput={dispatch} curr="Product" />
  </div>
  <div className='inputGroup'>
    <h3>Cost Name:</h3>
    <FunctInput handleInput={dispatch} curr="Cost" />
  </div>
  <div className='inputGroup'>
    <h3>Category Name:</h3>
    <FunctInput handleInput={dispatch} curr="Category" />
  </div>
</div>

        <HoldsList props = {item}></HoldsList>
    </div>
  )
}

export default Top