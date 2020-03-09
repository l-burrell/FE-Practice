<template>
    <section id='sweeteners'>
        <table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Calories</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="sweetener-name">Sugar</td>
                    <td class="sweetener-calories">377</td>
                    <td class="sweetener-desc">Regular white granual cane sugar, with an deliciously sweet taste.</td>
                </tr>
                <tr>
                    <td class="sweetener-name">Stevia</td>
                    <td class="sweetener-calories">0</td>
                    <td class="sweetener-desc">Stevia is a sugar substitute that comes from a plant, and has no calories</td>
                </tr>
                <tr>
                    <td class="sweetener-name">Equal</td>
                    <td class="sweetener-calories">0</td>
                    <td class="sweetener-desc">Equal is the sweetener substitute you trust to perfectly flavor your favorite beverages without the calories</td>
                </tr>
                <tr>
                    <td class="sweetener-name">Splenda</td>
                    <td class="sweetener-calories">3.36</td>
                    <td class="sweetener-desc">Splenda says you can get the same delicious taste without all of the added calories</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style scoped>
section {
    margin: auto;
    width: 800px;
}
table td {
    padding: 20px;
}
@media screen and (max-width: 800px){
    .sweetener-desc {
        width: 350px;
    }
    table {
        overflow: hidden;
    }
    section {
        margin-bottom: 20vh;
    }
}
</style>