import React from 'react';
import ItemList from '../ItemList/ItemList';
const style={fontFamily: "Helvetica", fontSize: "2.5rem"};
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
const promise = new Promise((resolve, reject) =>{
    
    if(listaPrueba.length>0){
        resolve(listaPrueba);
    }
    else{
        reject("Error: Lista vacia");
    }
});
let lista;
promise
.then( result => {lista = result;console.log(result);})
.catch( error => console.log(error));

setTimeout(() => {console.log("esperando")},10000);

export default function ItemListContainer(props) {
    
    return <div className ="container">
        <h1 style={style}>To Be Continued!</h1>
        {props.children}
        <ItemList lista={listaPrueba}/>
    </div>
}