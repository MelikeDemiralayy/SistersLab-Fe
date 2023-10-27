import { useState } from "react";
import ingredientsToAdd from "../../constants/ingredientsToAdd";
import './style.css';

const HamburgerApp = () => {

    const [selectedIngredients, setSelectedIngredientss] = useState([]); //hangi malzemelerin seçildiğini tutmak için
    const [totalPrice, setTotalPrice] = useState(0); //fiyat bilgileri için


    const addIngredient = (ingredient) => {
        //console.log (ingredient);
        const isAdded = selectedIngredients.find((item) => item.id === ingredient.id);//daha önceden aynı malzemeden eklendi mi kontrolü 
        if(isAdded){
            setSelectedIngredientss(
                selectedIngredients.map((item) =>{
                    if(item.id === ingredient.id){
                        return {...item, count: item.count +1}; //eklendiyse eğer sayısını arttırıyoruz.
                    }
                    return item; // ya da itemi dönüyor.
                })
            );
        } else {
            setSelectedIngredientss([ // eğer eklenmediyse selectedIngredients içine ekle ve sayısını 1 yap.
                ...selectedIngredients,
                {
                    ...ingredient, 
                    count:1,
                },
            ]);
        }
         //Malzeme eklenirken fiyatı toplam fiyata eklemek için:
         setTotalPrice(totalPrice + ingredient.price);
        
    };
        const removeIngredient = (ingredient) =>{ // eklediğimiz malzemleri çıkarmak istediğimizde...
            //console.log ('ingredient :>>', ingredient);
            const addedIngredient = selectedIngredients.find((item) => item.id === ingredient.id);// daha önceden seçilmiş mi kontrolü
            if(addedIngredient.count>1){
                setSelectedIngredientss(
                    selectedIngredients.map((item) =>{
                    if(item.id === ingredient.id){
                        return{
                            ...item, count: item.count -1 // seçtiğimi 1 azaltıyorum.
                        };
                    }
                    return item;
                })
                );
            } 
            else {
            setSelectedIngredientss(
                selectedIngredients.filter((item) =>item.id !== ingredient.id)
            );
            }
          //Malzeme çıkarılırken toplam fiyattan çıkarmak için:
            setTotalPrice(totalPrice - ingredient.price);
        };
    return( 
        <div>
            <h1>Hamburger App</h1>
            <div>
                <h2>Malzemeler:</h2>
                <ul>
                    {selectedIngredients.map((ingredient) =>
                    <li key={ingredient.id}> 
                         {ingredient.name} x {ingredient.count} - {ingredient.price * ingredient.count} TL
                    </li>
                    )}
                </ul>
                <h2>Eklenecek Malzemeler:</h2>
                <ul> 
                    {ingredientsToAdd.map((ingredient) =>
                    <li key={ingredient.id}>
                        <p>{ingredient.name}
                        <button onClick={() => addIngredient(ingredient)} className="add-ingredient">Ekle</button>
                        <button onClick={() => removeIngredient(ingredient)} className = {selectedIngredients.find(
                            (item) => item.id === ingredient.id
                        )   ? 'remove-ingredient'         // selectedingredents içinde varsa bu css i kullan.
                            :'remove-ingredient disabled' // eğer malzeme selectedingridents içinde yoksa bu css i kullan .
                        }
                        >Çıkar</button>
                        </p>
                    </li>
                    )}
                </ul>
                <div>
                    <h2>Toplam Fiyat : {totalPrice} TL </h2>
                </div>
            </div>
        </div>
    );
};
export default HamburgerApp;