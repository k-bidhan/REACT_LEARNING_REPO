function Food(){

    const food1 = "Pizza";
    const food2 = "Biryani";

    return(
        <ul>
            <li>Banana</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}

export default Food