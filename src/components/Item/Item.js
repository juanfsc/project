import React from 'react'
const data = {}
export default function Item(props) {
    
    const {image} = props.data;
    const {title} = props.data;
    const {linkhref} = props.data;
    const {linkDescription} = props.data;
    const {description} = props.data;
    const {price} = props.data;
    const {classs} = props;
    
    return  <div className= {classs} >
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={image} />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></span>
                        <p>{price}</p>
                        <p><a href={linkhref}>{linkDescription}</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            
}
