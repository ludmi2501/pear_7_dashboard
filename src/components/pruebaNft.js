import React from 'react';

function Pruebanft(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.name}</td>
                <td>{props.length}</td>
            </tr>
        </React.Fragment>
    )
}
export default Pruebanft;