<template>
    <footer>
        <section id="other-platforms">
            <ul>
                <li><a href="#">Youtube</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Discord</a></li>
                <li><a href="#">Github</a></li>
            </ul>
        </section>
        <section id="email-section">
            <label for="email">Email 
                <input type="email" placeholder="user@host.com">
            </label>
            <br>
            <label for="message">Message
                <input type="text" placeholder="Your message here...">
            </label>
        </section>
    </footer>
</template>

<style scoped>
footer {    
    display: flex;
    background-color: rgb(20, 19, 19);
    color: white;
    justify-content: space-evenly;
    height: 20vh;
}
section {
    margin: auto;
}
ul li {
    list-style: none;
    padding: 3px;
}
ul li a {
    text-decoration: none;
    color: white;
}
section#email-section input {
    display: grid;
    height: 30px;
}
</style>