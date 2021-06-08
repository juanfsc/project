import React from 'react'

export default function Links(props) {
    const {classAtributes, idAtributes} = props;
    return <>
        <ul className={classAtributes} id={idAtributes}>
            <li><a href="">Inline Skates</a></li>
            <li><a href="">Roller Skates</a></li>
            <li><a href="">Protection</a></li>
            <li><a href="">Clothing</a></li>
        </ul>

    </>
}