<template>
    <section id='flavors'>
        <article>
            <h3 class="coffee-flavor">French Vanilla</h3>
            <p class="coffee-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ducimus cumque hic nemo voluptatem. Cumque dolore voluptas omnis nihil impedit.</p>
        </article>
        <article>
            <h3 class="coffee-flavor">Roasted Chestnut</h3>
            <p class="coffee-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dolor iure iusto nisi et dolore exercitationem consequatur eaque aspernatur, quis error molestiae animi officia alias reprehenderit, quam odio repellendus delectus!</p>
        </article>
        <article>
            <h3 class="coffee-flavor">Chocolate Mocha</h3>
            <p class="coffee-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reprehenderit ab quas laborum. Illum natus fuga beatae neque nulla! Totam sed mollitia beatae adipisci?   </p>
        </article>
    </section>
</template>

<style scoped>
section {
    display: flex;
}
article {
    width: 500px;
    padding: 0 20px;
}
.coffee-desc {
    line-height: 1.5;
}
@media screen and (max-width: 800px){
    section {
        display: flex;
        flex-flow: column;
        margin-bottom: 30vh;
        padding: 0;
        /* margin-left: 0; */
    }
}
</style>