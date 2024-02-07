import { useState, useEffect } from 'react';
import HandleServer from '../components/HandleServer';
import { useCookies } from 'react-cookie';

function useListTotal(Server1, Server2) {
    const [categoryTotal, setCategoryTotal] = useState([]);
    const [cookies] = useCookies(['UserData']);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const obj = { username: cookies.UserData };
                const temp1 = await HandleServer(obj, Server1);
                const totals = await Promise.all(
                    temp1.data.map(async (ListId, index) => {
                        const obj1 = {
                            username: cookies.UserData,
                            listName: ListId
                        };
                        const tempTotal = await HandleServer(obj1, Server2);
                        const x = sum(tempTotal.data);
                        return [ListId, x];
                    })
                );
                setCategoryTotal(totals);
            } catch (error) {
                console.error('Error fetching list:', error);
            }
        };

        fetchData();
    }, [Server1, Server2, cookies.UserData]);

    function sum(array) {
        return array.reduce((acc, currentValue) => acc + currentValue, 0);
    }

    return categoryTotal;
}

export default useListTotal;
