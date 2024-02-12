import React from 'react';
import TrashCan from   "../../images/trashCan.png"

import HandleServer from '../../components/HandleServer';
function Delete({ index, handleUpdateList }) {

  const handleClick = () => {
    const obj=index
    HandleServer(obj, 'delete')
    handleUpdateList()
};


    return (

        <button onClick={  handleClick }  className='ButtonImage' > <img src={TrashCan} alt="Google" className='ImageButton'/></button>
    );
}

export default Delete;
