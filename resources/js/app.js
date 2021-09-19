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

// desired endpoint URL
const url = `https://disease.sh/v3/covid-19/historical/all`


fetch(url)
    // convert response to JSON
    .then(function (data) {
        return data.json()
    })
    // console.log converted JSON
    .then(data => {
        console.log(data)
// keys and values we want to add
        const deaths = Object.values(data.deaths)
        const dates = Object.keys(data.deaths)

        let ctx = document.getElementById("root").getContext("2d");

        let config = {
            type: 'line',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: 'Peopel dead with covid19',
                        data: deaths,

                        backgroundColor: [
                            "white",
                        ],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.4,
                        borderWidth: 4,

                    },
                ]
            },
            options :{
                responsive:true,
                animations: {
                    radius: {
                        duration: 400,
                        easing: 'linear',
                        loop: (context) => context.active
                    }
                },
                hoverRadius: 12,
                hoverBackgroundColor: 'gray',
                interaction: {
                    mode: 'nearest',
                    intersect: false,
                    axis: 'x'
                },
                scales: {
                    y: {
                        ticks: {
                            color: "gray",
                            fontSize: 14
                        },
                        grid:{
                            display: false,
                            drawBorder: false,
                            drawOnChartArea: false,
                            drawTicks: false,
                        }
                    },
                    x:{
                        ticks: {
                            color: "gray",
                            fontSize: 20,
                            fontFamily:"Helvatica",

                        },
                        grid:{
                            display: false,
                            drawBorder: false,
                            drawOnChartArea: false,
                            drawTicks: false,
                        }
                    }

                },

            }
        }

        let myChart = new Chart(ctx, config)
    })

fetch(url)
    .then(function (dat) {
        return dat.json()
    })
    .then(dat => {
        console.log(dat)

        const cases = Object.values(dat.cases)
        const dates = Object.keys(dat.cases)

        let ctx = document.getElementById("rooth").getContext("2d");

        let config = {
            type: 'line',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: 'Peopel sick with covid19',
                        data: cases,
                        backgroundColor: [
                            "white",
                        ],
                        fill: false,
                        fontSize:15,
                        borderColor: 'rgba(71, 151, 122, 0.88)',
                        cubicInterpolationMode:'default',
                        Tension: 1,
                        borderWidth: 4,


                    },
                ]
            },
            options :{
                responsive: true,
                animations: {
                    radius: {
                        duration: 400,
                        easing: 'linear',
                        loop: (context) => context.active
                    }
                },
                hoverRadius: 12,
                hoverBackgroundColor: 'pink',
                interaction: {
                    mode: 'nearest',
                    intersect: false,
                    axis: 'x'
                },
                tooltips:{
                  enabled:true
                },
                scales: {
                    y: {
                        ticks: {
                            color: "gray",
                            fontSize: 20,
                        },
                        grid:{
                            display: false,
                            drawBorder: false,
                            drawOnChartArea: false,
                            drawTicks: false,
                        },
                    },
                    x:{
                        ticks: {
                            color: "gray",
                            fontSize: 20,

                        },
                        grid:{
                            display: false,
                            drawBorder: false,
                            drawOnChartArea: false,
                            drawTicks: false,
                        }
                    },


                },

            }
        }

        let myChart = new Chart(ctx, config)
    })
