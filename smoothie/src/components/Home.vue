<template>
    <section>
        <nav>
            <a id='logo'>SmoothieMunchers</a>
            <ul>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#specials">Specials</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
            </ul>
        </nav>
        <main id="home">
            <h1>SmoothieMunchers</h1>
            <h2>Try our mango magic smoothie mixed with pure pineapple extract.</h2>
        </main>
    </section>
</template>

<style scoped>
section {
    background-image: url('../assets/smoothie-main.png');
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: -150px;
    height: 80vh;
}
nav {
    padding: 45px;
    background-color: rgb(20, 19, 19);
    display: flex;
    justify-content: space-between;
    height: 10vh;
}
ul li {
    list-style: none;
    display: inline-block;
    padding: 0 20px;
}
nav, section {
    border-bottom: solid rgb(23, 75, 15) 1px;
}
nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}
nav a#logo:hover {
    cursor: default;
}
main {
    position: relative;
    top: 280px;
    left: 850px;
    max-width: 600px;
}
main h1 {
    padding: 30px;
    font-size: 60px;
}
main h2 {
    margin-top: 40px;
}
</style>