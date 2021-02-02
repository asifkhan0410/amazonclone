import React from 'react'
import './Home.css'
import Product from './Product.js'

function Home() {
    return (
        <div className="home">
          <div className="home_container">
            <img className="home_image" 
             src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_ft._CB404804383_.jpg" alt=""/>
            <div className="home_row">
                <Product 
                id='121'
                title='The Power of Your Subconcious Mind'
                price={29}
                rating={5}
                image='https://m.media-amazon.com/images/I/81gTwYAhU7L._AC_UY327_FMwebp_QL65_.jpg'/>
                <Product 
                id={131}
                title='Fancy Mart Plastic & Wood Artificial Bamboo Leaves Plant with Wood Hexagon Pot (20 cm, Green)'
                price={10}
                rating={4}
                image='https://images-na.ssl-images-amazon.com/images/I/71V2wENcTtL._SL1500_.jpg'
                />

            </div>

            <div className="home_row">
                <Product 
                id={141}
                title='Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL'
                price={1100}
                rating={4}
                image='https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg'/>
                <Product 
                id={151}
                title='Sennheiser Over Ear Wireless HD 350BT Black Headphone'
                price={100}
                rating={5}
                image='https://images-na.ssl-images-amazon.com/images/I/51siMFU59xL._SL1280_.jpg'/>
                <Product 
                id={161}
                title='boAt Stone 1000 Portable Wireless Speaker with 14W Stereo Sound, Enhanced Bass, Rugged Design, Up to 8H Playtime and IPX5 Water & Splash Resistance (Black)'
                price={50}
                rating={4}
                image='https://images-na.ssl-images-amazon.com/images/I/718DqdKu9tL._SL1500_.jpg'/>
            </div>

            <div className="home_row">
                <Product 
                id={171}
                title='Apple AirPods Pro'
                price={300}
                rating={5}
                image='https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg'/>
                <Product 
                id={181}
                title='Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Silver'
                price={3000}
                rating={5}
                image='https://images-na.ssl-images-amazon.com/images/I/71y%2BlIHVdAL._SL1500_.jpg'/>
                <Product 
                id={191}
                title='Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey'
                price={400}
                rating={5}
                image='https://images-na.ssl-images-amazon.com/images/I/716t36GKG1L._SL1500_.jpg'/>
                <Product 
                id={211}
                title='DriftingWood Sheesham Wood Writing Study Table for Home and Office with Chair'
                price={200}
                rating={4}
                image='https://images-na.ssl-images-amazon.com/images/I/61TgOqqe44L._SL1000_.jpg'/>
                <Product 
                id={221}
                title='Home Centre Antonio Solid High Back Mesh Office Chair (Black)'
                price={150}
                rating={4}
                image='https://images-na.ssl-images-amazon.com/images/I/61CFthbCzKL._SL1200_.jpg'/>               
            </div>
            <div className="home_row">
                <Product 
                id={231}
                title='Apple Watch Series 3 (GPS, 38mm) - Space Grey Aluminium Case with Black Sport Band'
                price={300}
                rating={5}
                image='https://images-na.ssl-images-amazon.com/images/I/71WgOCvKwrL._SL1500_.jpg'/>
                <Product id={12}
                title='Amazon Brand - Solimo Musca Single Seater Fabric Recliner (Chocolate)'
                price={241}
                rating={4}
                image='https://images-na.ssl-images-amazon.com/images/I/81Du4NwnDnL._SL1500_.jpg'/>         
            </div>
          </div>
        </div>
    )
}

export default Home
