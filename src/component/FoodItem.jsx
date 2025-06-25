export default function FoodItem({foodItem}){

    return(

        <div>

            <img src={foodItem.image} alt="image not found" />
            <h3>{foodItem.title}</h3>
            <button>view reci</button>

        </div>
    )

}