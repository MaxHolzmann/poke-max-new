import React from 'react'
import fetch from 'isomorphic-fetch'

//fetch pokemon data & return an object of the data. 
const getPokemon = () => 
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then( r => r.json() )
    .then( data => {
        return Promise.resolve(data).then(function(finalData) {
        })
    })

export default getPokemon
