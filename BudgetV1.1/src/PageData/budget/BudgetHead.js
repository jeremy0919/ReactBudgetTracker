import React, { useEffect, useState } from 'react';
import Print from '../../components/Print';
import HandleServer from '../../components/HandleServer';
import { useCookies } from 'react-cookie';
import { useListContext } from '../../Context/CurrentList';
import useListTotal from '../../DisplayGraphic/useListTotal';
import { useAccountContext } from '../../Context/AccountInfo';
function BudgetHead() {
    const [cookie] = useCookies(['UserData']);
    const [budget, setBudget] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const { CurrentList } = useListContext();
    const {accountInfo} = useAccountContext()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const obj = { username: cookie.UserData };
                const temp = await HandleServer(obj, "Get Budget");
                setBudget(temp.data);
             
            } catch (error) {
                console.error('Error fetching budget:', error);
            }
        };

        fetchData();
    }, [cookie.UserData, CurrentList, accountInfo.Budget]);

   
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
                });

                // Update remaining budget after deducting total
                setRemaining(budget - totalDeducted);
            } catch (error) {
                console.error('Error fetching remaining budget:', error);
            }
        };

        fetchData();
    }, [CurrentList, categoryTotal, budget]);

    return (
        <div>
            <h1>Current Budget</h1>
            <h2>{budget}</h2>
            <h2>Remaining Budget</h2>
            <h2>{remaining}</h2>
            <h2>Current List: {CurrentList}</h2>
            <Print />
        </div>
    );
}

export default BudgetHead;

