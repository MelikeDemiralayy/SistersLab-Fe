import { Input, Button } from "antd";
import { useEffect, useState } from "react";
import Item from "../Item";


const TodoApp = () =>{
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    //useEffect state değişimlerini kontrol etmek için kullanılır.
    useEffect(() => {
        console.log(todos, "test2");
    }, [todos]);

    //oluşturduğum todoları eklmek için 
    const addTodo = () =>{
    if(text){
        setTodos([...todos, {text}]);
        console.log(todos, "test1");
        setText("");// girilen input değerinin eklendikten sonra temizlenmesi için.
        }
    };
    //Listedeki verilen görevleri silmek için kullanılan method
    const Delete = (index) =>{
        const updatedTodos = todos.filter((todo, i) => i !== index);
        setTodos(updatedTodos);
        };
    return(<div>
    <h1>Todo List</h1>
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Input
        value={text}
        type="text"
        placeholder="Yeni Görev Ekle"
        onChange={(e) => setText(e.target.value)} // onchange girilen value değerini güncelleyip kullanıcının girdiği değeri yansıtır.
        />
        <Button onClick={addTodo} type="primary">Ekle</Button>
    </div>
    <ul>
    {todos.map((todo, index) => (
        <Item key={index} todo={todo} onDelete={() => Delete(index)}/>
        ))}
    </ul>
    </div>  
    );

};
export default TodoApp;