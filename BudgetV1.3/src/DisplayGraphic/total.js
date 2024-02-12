import {useState, useEffect, useReducer} from 'react'

const initial = {
    Groceries:0,
    Gas:0,
    Resteraunts:0,
    Clothes:0,
    Suppliments:0,
    LivingExpenses:0,
    Other:0

}

const reducer = (state, action)=>{
    if(action.Cost<=action.total){
    switch(action.type)
        {
            case 'Groceries':
                return {...state, Groceries:( action.Cost /action.total *100)+state.Groceries}
            case 'Gas':
                return {...state, Gas:( (action.Cost/action.total) *100)+state.Gas}
            case 'Resteraunts':
                return {...state, Resteraunts:( (action.Cost/action.total) *100)+state.Resteraunts}
            case 'Clothes':
                return {...state, Clothes:( (action.Cost/action.total) *100)+state.Clothes}
            case 'Suppliments':
                return {...state, Suppliments:( (action.Cost/action.total) *100)+state.Suppliments}
            case 'LivingExpenses':
                return {...state, LivingExpenses:( (action.Cost/action.total) *100)+state.LivingExpenses}
            case 'Other':
                return {...state, Other:( (action.Cost/action.total) *100)+state.Other}
            default:
                if(action.type!= null){
                return {...state, Other:( (action.Cost/action.total) *100)+state.Other}
                }
                else return initial
        }
    }
    else{
        return initial
    }
}

function useTotal(List) {
    const [total, addTotal] = useState(0);
    const [items, dispatch ]= useReducer(reducer, initial)
    useEffect (() =>{
        dispatch({type: null}) 
        if(List!=null){
        const totalCost = List.reduce((total, item) => {
            const cost = parseFloat(item.Cost);
            return total + cost;
        }, 0);
        
            addTotal(totalCost)
    }
       
    }, [])
    useEffect(() => {
        if(List!=null){
        for (const item of List) {
            dispatch({ type: item.Category, Cost:item.Cost, total: total });
        }
    }
    }, [total]);


  return (
    items // should return what percent of 100 each category is
  )
}

export default useTotal