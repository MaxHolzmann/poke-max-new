import '../styles/globals.css'
import 'fontsource-roboto';
import '@material-ui/core'
import Layout from '../components/Layout'


function maxPokeGen({ Component, pageProps }) {
  return(
    <>
    <Layout></Layout>
   <Component {...pageProps} /> 
   </>
  )

}

export default maxPokeGen
