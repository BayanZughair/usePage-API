class APIManager {
    constructor() {
        this.data = {}
    }

    loadData() {
        const userPromise = fetch("https://randomuser.me/api/?results=7")
            .then(response => response.json())
            .then(result => {
                this.data.user = {
                    firstName: result.results[0].name.first,
                    lastName: result.results[0].name.last,
                    city: result.results[0].location.city,
                    state: result.results[0].location.state,
                    picture: result.results[0].picture.medium
                }
                this.data.friends = result.results.map(frind => { return { firstName: frind.name.first, lastName: frind.name.last } }).splice(1, 6)
            })
            .catch(error => console.error("Error loading user data:", error));

        const quotePromise = fetch("https://api.kanye.rest/")
            .then(response => response.json())
            .then(result => {
                this.data.quote = {
                    quote: result.quote
                }
            })
            .catch(error => console.error("Error loading quote data:", error));

        const pokemonPromise = new Promise((resolve, reject) => {
            const randomNumber = (Math.floor(Math.random() * 100))
            fetch(`https://pokeapi.co/api/v2/pokemon/1${randomNumber}`)
                .then(response => response.json())
                .then(result => {
                    this.data.pokemon = {
                        name: this.toProperCase(result.name),
                        image: result.sprites.front_default
                    }
                    resolve();
                })
                .catch(error => {
                    console.error("Error loading pokemon data:", error);
                    reject(error);
                });
        });

        const meatPromise = fetch("https://baconipsum.com/api/?type=meat-and-filler")
            .then(response => response.json())
            .then(result => {
                this.data.meat = result[0]
            })
            .catch(error => console.error("Error loading meat data:", error));

        Promise.all([userPromise, quotePromise, pokemonPromise, meatPromise])
            .then(() => console.log("Data loaded successfully:", this.data))
            .catch(error => console.error("Error loading data:", error));
    }
    toProperCase(str) {
        return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
}
