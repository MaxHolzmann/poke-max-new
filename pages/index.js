import Head from 'next/head'
import Button from '@material-ui/core/Button';
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import getPokemon from '../utils/getPokemon'
import pokePost from '../utils/pokePost'

const getPoke = getPokemon()

const Home = () => {
  return (
  <>
  <h1>Hey</h1>
  {pokePost(getPokemon())}
  </>
  )
}

export default Home
