
import React from 'react'
import Layout from '../Layout';
import Products from './Products'
import ImageSlider from './ImageSlider';


const Main = (props) => {
 
    return (
      <Layout>
        <div>
{/*           <ImageSlider />
 */}          <Products />
        </div>
      </Layout>
    )
}

export default Main;


