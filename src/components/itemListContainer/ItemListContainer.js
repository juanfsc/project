import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
const listaPrueba =[   
    {
        image: "https://i.ebayimg.com/images/g/LqEAAOSwWOJfPo-U/s-l225.jpg",
        title: "title",
        linkhref: "#",
        linkDescription: "linkDescription",
        price:"80$",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque at nulla ut tristique. Sed pretium velit massa. Donec at faucibus lectus. Cras quam velit, blandit in nunc ac"
    },
    {
        image: "https://i.ebayimg.com/images/g/LqEAAOSwWOJfPo-U/s-l225.jpg",
        title: "title",
        linkhref: "#",
        linkDescription: "linkDescription",
        price:"80$",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque at nulla ut tristique. Sed pretium velit massa. Donec at faucibus lectus. Cras quam velit, blandit in nunc ac"
    },
    {
        image: "https://i.ebayimg.com/images/g/LqEAAOSwWOJfPo-U/s-l225.jpg",
        title: "title",
        linkhref: "#",
        linkDescription: "linkDescription",
        price:"80$",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque at nulla ut tristique. Sed pretium velit massa. Donec at faucibus lectus. Cras quam velit, blandit in nunc ac"
    },
    {
        image: "https://i.ebayimg.com/images/g/LqEAAOSwWOJfPo-U/s-l225.jpg",
        title: "title",
        linkhref: "#",
        linkDescription: "linkDescription",
        price:"80$",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque at nulla ut tristique. Sed pretium velit massa. Donec at faucibus lectus. Cras quam velit, blandit in nunc ac"
    },
    {
        image: "https://i.ebayimg.com/images/g/LqEAAOSwWOJfPo-U/s-l225.jpg",
        title: "title",
        linkhref: "#",
        linkDescription: "linkDescription",
        price:"80$",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque at nulla ut tristique. Sed pretium velit massa. Donec at faucibus lectus. Cras quam velit, blandit in nunc ac"
    },{
        image: "https://i.ebayimg.com/images/g/LqEAAOSwWOJfPo-U/s-l225.jpg",
        title: "title",
        linkhref: "#",
        linkDescription: "linkDescription",
        price:"80$",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque at nulla ut tristique. Sed pretium velit massa. Donec at faucibus lectus. Cras quam velit, blandit in nunc ac"
    }
]

export default function ItemListContainer(props) {
    const [lista, setLista] = useState([]);
    useEffect( () => {
        const promise = new Promise((resolve, reject) =>{
    
            if(listaPrueba.length>0){
                resolve(listaPrueba);
            }
            else{
                reject("Error: Lista vacia");
            }
        })
        setTimeout(() => {promise
            .then( result => setLista(result))
            .catch( error => console.log(error));},2000);
    })
    return <div className ="container">
        {props.children}
        <ItemList lista={lista}/>
    </div>
}