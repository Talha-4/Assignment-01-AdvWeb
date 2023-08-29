import React from 'react'
import './../../css/style.css'
import sc3 from './../../img/showcase-photo3.jpg'
import sc1 from './../../img/showcase-photo1.jpg'
import { NavLink } from 'react-router-dom'


function Showcase() {
  return (
    
    <section class='showcase'>
    <div class="container">
        <div class="row row1">
            <div class="img-box">
                <img src={sc3} alt="Image Description"/>
            </div>
            <div class="text-box">
                <h2 class='lg-heading text-black'>DEGANVY, U.K</h2>
                <p class='text-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet pariatur maiores, id quis, totam dolore praesentium facere consequatur rem, fuga minus! Rerum, dolorem praesentium. Nemo?</p>
                {/* <a href="./about.html" class='btn btn-secondary'>More</a> */}
                <NavLink to='./about' className='btn btn-secondary'>More</NavLink>
            </div>
        </div>
        <div class="row row2">
            <div class="img-box">
                <img src={sc1} alt="Image Description"/>
            </div>
            <div class="text-box">
                <h2 class='lg-heading text-black'>DESERT, EGYPT</h2>
                <p class='text-gray'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet ratione, quas laborum porro, explicabo vero ipsum laudantium nesciunt eos illum pariatur obcaecati fugiat asperiores nulla adipisci. Porro, atque itaque.</p>
                <NavLink to='./about' className='btn btn-secondary'>More</NavLink>
            </div>
        </div>
    </div>
</section>

  )
}

export default Showcase