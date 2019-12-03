import React from 'react';

const divStyle = {
    width: "100vw",
    height: "450px",
    overflow: "scroll"
}


const Table = (props) => {
    if (!props.data || !props.data.length) {
        return null;
    }

    console.log(props.data);

    const headers = Object.keys(props.data[0]);

    return <div style={divStyle}>
        <table>
            <thead>
                <tr>
                    {headers.map(item => <th>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.data.map(dataItem => <tr>{
                    headers.map(headerItem => <td>{dataItem[headerItem]}</td>)
                }</tr>)}
            </tbody>
        </table>
    </div>
}

export default Table;