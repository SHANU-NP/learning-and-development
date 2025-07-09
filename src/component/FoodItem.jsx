import style from "../css/foodItem.module.css";

export default function FoodItem({foodItem}){

    return(

        <div className={style.foodItemContainer}>

            <img src={foodItem.image} alt="image not found" />
            <h3>{foodItem.title}</h3>
            <button>view recipe</button>

        </div>
    )

}