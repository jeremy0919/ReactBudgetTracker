import React, { useEffect, useState } from 'react';
import { useRenderContext } from '../../Context/ReRenderList';
import HandleServer from '../../components/HandleServer';
import { useCookies } from 'react-cookie';
import { useListContext } from '../../Context/CurrentList';
import useListTotal from '../../DisplayGraphic/useListTotal';
import { useAccountContext } from '../../Context/AccountInfo';

function BudgetHead() {
    const [cookie] = useCookies(['UserData']);
    const {amRendering, setAmRendering} = useRenderContext();
    const [budget, setBudget] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const { CurrentList } = useListContext();
    const {accountInfo} = useAccountContext()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const obj = { GUID: cookie.UserData };
                const temp = await HandleServer(obj, "Get Budget");
                setBudget(temp.data);
             
            } catch (error) {
                console.error('Error fetching budget:', error);
            }
        };

        fetchData();
    }, [cookie.UserData, CurrentList, accountInfo.Budget, amRendering]);

   
    const categoryTotal = useListTotal("Lists", "Total List");

    useEffect(() => {
        
        const fetchData = async () => {
            
            try {
                let totalDeducted = 0;
                
                // Calculating remaining budget using categoryTotal from useListTotal
                categoryTotal.forEach((item) => {
                    if (item[0] === CurrentList) {
                        totalDeducted += item[1];
                    }
                    console.log(totalDeducted)
                });

                // Update remaining budget after deducting total
                setRemaining(budget - totalDeducted);
              
            } catch (error) {
                console.error('Error fetching remaining budget:', error);
            }
        };

        fetchData();
    }, [CurrentList, categoryTotal, budget, amRendering]);

    return (
        <div>
            <p>Current Budget</p>
            <p>{budget}</p>
            <p>Remaining Budget</p>
            <p>{remaining}</p>
        </div>
    );
}

export default BudgetHead;

