<template>
    <section id='mix'>
        <h2>Mix your own smoothie</h2>
        <section id='fruit'>
            <h3>Select the fruit</h3>
            <input type="checkbox" value="pineapple"> Pineapple
            <input type="checkbox" value="mango"> Mango
            <input type="checkbox" value="peaches"> Peaches
            <input type="checkbox" value="banana"> Banana
            <input type="checkbox" value="strawberry"> Strawberry
            <input type="checkbox" value="passionfruit"> Passionfruit
            <input type="checkbox" value="watermelon"> Watermelon
        </section>
        <section id='ice'>
            <h3>Extra</h3>
            <input type="checkbox" value=""> Ice
            <input type="checkbox" value=""> Milk
            <input type="checkbox" value=""> Yogurt
            <input type="checkbox" value=""> Honey
            <input type="checkbox" value=""> Cane Sugar
        </section>
        <section id="thickness">
            <h3>Thickness</h3>
            <input type="checkbox" value=""> Smoothie
            <input type="checkbox" value=""> Sorbet
            <input type="checkbox" value=""> Custard
        </section>
        <section id="price-box">
            <h3>Total: </h3>
            <span id='price'>$13</span>
        </section>
    </section>
</template>

<style scoped>
section#mix {
    background-color: white;
    color: black;
    height: 50vh;
    padding: 50px;
}
section h2 {
    font-size: 40px;
    padding: 20px;
}
section, section h3 {
    padding: 10px;
}
input {
    margin-left: 15px;
}
#price-box {
    padding-top: 50px;
    font-size: 25px;
}
#price-box h3 {
    display: inline;
}
</style>