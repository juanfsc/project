import React from 'react'
import './ItemDetail.css'

export default function ItemList(props) {
    const {info} = props;
    const {title} = info;
    const {image} = info;
    const {description} = info;
    const {price} = info;
   return<>
        <div className="row " id="item-detail">
            <div className = "col s6">
                <img src={image} className="responsive-img z-depth-1"></img>
            </div>
            <div className = "col s6">
                <div>
                    <h2 id="title">{title}</h2>
                </div>
                <div>
                    <h4 id="price">{price}</h4>
                </div>
                <div>
                    <p className ="flow-text" id="description">{description}</p>
                </div>
                
            </div>
        </div>
        
   </>
}