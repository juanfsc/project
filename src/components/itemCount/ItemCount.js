import React,{useState} from 'react'


export default function ItemCount(props) {
    const stock = parseInt(props.stock);
    const initial = parseInt(props.initial);
    const [count, setCount] = useState(initial);

    function handleIncrease(){
        setCount(Math.min(stock,count+1));
    }
    function handleDecrease(){
        setCount(count > 0 ? count  - 1 : 0); 
    }
    function DecrementButton(props){
        const {count} = props;
        let classN = "";
        if(0 === count){
            classN = "btn waves-effect waves-light disabled";
        }
        else{
            classN = "btn waves-effect waves-light";
        }
        return<button onClick={e => handleDecrease()} className={classN}>  <i class="material-icons right ">remove_circle</i></button>
    }
    function IncrementButton(props){
        const {stock} = props;
        const {count} = props;

        let classN = "";
        if( stock === count){
            classN = "btn waves-effect waves-light disabled";
        }
        else{
            classN = "btn waves-effect waves-light";
        }
        return<button onClick={e => handleIncrease()} className={classN}> <i class="material-icons right ">add_circle</i></button>
    }
    return <div className="">
        <h1>${count}</h1>
        <DecrementButton count={count}/>
        <IncrementButton count={count} stock={stock}/>
        <div>
            <button className="btn waves-effect waves-light color">Agregar al Carrito</button>
        </div>
        
    </div>
}
ItemCount.defaultProps = {
    stock: 5,
    initial: 1
}