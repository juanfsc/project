import React from 'react'
import Item from '../Item/Item'
export default function ItemList(props) {
    const {lista} = props;

    return  <div className="row">
                {lista.map(obj => <Item data={obj} classs={"col"} />)}
            </div>
}