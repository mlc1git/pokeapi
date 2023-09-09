const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

const result = fetch(url).then(res => res.json()).then(data => console.log(data.abilities))
