
import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Models from './components/models/Models'
import Navbar from './components/navbar/navbar'
import PricingCart from './components/pricingcart/PricingCart'
import Rating from './components/rating/Rating'
import Started from './components/started/Started'

const getModels = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

const modelsPromise = getModels();

const getPricingCart = async () => {
  const res = await fetch('/pricingCart.json');
  return res.json();
}

const pricingCartPromise = getPricingCart();

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <Models modelsPromise={modelsPromise}></Models>
      
      <Started></Started>
      <PricingCart pricingCartPromise={pricingCartPromise}></PricingCart>
      <Banner></Banner>
      <Footer></Footer>
    </>
  )
}

export default App
