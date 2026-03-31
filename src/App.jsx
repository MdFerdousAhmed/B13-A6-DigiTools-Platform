
import './App.css'
import Banner from './components/banner/Banner'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/navbar'
import Rating from './components/rating/Rating'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <Card></Card>
      <Banner></Banner>
      <Footer></Footer>
    </>
  )
}

export default App
