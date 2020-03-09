<template>
    <section>
        <h1>Try our delicious coffee</h1>
    </section>
</template>

<style scoped>
section {
    overflow: hidden;
    background-image: url('https://live.staticflickr.com/7806/47469208302_911af65154_b.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
    margin: 0;
    margin-bottom: 140px;
}
h1 {
    font-size: 100px;
    color: white;
    text-shadow: 2px 4px black;
    position: absolute;
    top: 400px;
    left: 0;
    right: 0;
    margin: auto;
}
@media screen and (max-width: 800px) {
    h1 {
        font-size: 60px;
    }
}
</style>