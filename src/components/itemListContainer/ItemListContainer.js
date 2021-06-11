import React from 'react'
const style={fontFamily: "Helvetica", fontSize: "2.5rem"};
export default function ItemListContainer(props) {

    return <>
        <h1 style={style}>To Be Continued!</h1>
        {props.children}
    </>
}