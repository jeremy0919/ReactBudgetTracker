import React from 'react';

import HandleServer from '../../components/HandleServer';
function Delete({ index, handleUpdateList }) {

  const handleClick = () => {
    const obj=index
    HandleServer(obj, 'delete')
    handleUpdateList()
};


    return (
        <button onClick={  handleClick }>Delete</button>
    );
}

export default Delete;
