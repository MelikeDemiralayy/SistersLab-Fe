import Delete from "../Delete";

const Item = ({todo, onDelete}) =>{
    return(
        <div>
            <span>{todo.text}</span>
            <Delete onDelete={onDelete}/>
        </div>
    )
};
export default Item;