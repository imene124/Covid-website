/**
 * First we will load all of this project'assets JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

const url = `https://disease.sh/v3/covid-19/historical/all`


fetch(url)
    .then(function (data) {
        return data.json()
    })
    .then(data => {
        console.log(data)

        const deaths = Object.values(data.deaths)
        const dates = Object.keys(data.deaths)

        let ctx = document.getElementById("root").getContext("2d");

        let config = {
            type: 'line',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: '# of Deaths',
                        data: deaths,

                        backgroundColor: [
                            "white",
                        ],
                        borderWidth: 2,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    },
                ]
            },
            options :{
                scales: {
                    y: {
                        ticks: {
                            color: "blue",
                            fontSize: 14
                        }
                    },
                    x:{
                        ticks: {
                            color: "blue",
                            fontSize: 14
                        }
                    }

                },

            }
        }

        let myChart = new Chart(ctx, config)
    })

