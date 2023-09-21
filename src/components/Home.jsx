
// import styled from '@emotion/styled'
import landingImg from './images/landingImg.png'
// import {ShoppingBag} from '@mui/icons-material'

import React from 'react'

const Home = () => {
  return (
    <>
      <div className="home_container">
        <section className="landing_page">
          <div className="intro">
            <span className='hellow'>Hello ,</span>
            <span >I'm <span className="name">Abhiraj</span><p>React / Web developer</p> </span>
            <p className="introText">I am a fresher and skilled web designer(MERN),and I love to explore new things</p>
            <div>
              <button className='btn' type="submit" ><a href="#aboutme">Know More </a></button>
            </div>



          </div>
          <div className="image">

            <img style={{ width: 300, height: 400 }} src={landingImg} alt="error loading" />

          </div>
        </section>


        <section className="education" id="aboutme" >
          <div className="sec_section">

            <div className="card1">
              <h2 id='main_h'>education</h2>
              <p id='heading'>b.tech</p>
              <div className='content_1 card'>
                <div>
                  <h4>College :</h4>
                  <p><span />  <span /> RVS COLLEGE OF ENG. AND TECH.</p>
                </div>
                <div>
                  <h4>Branch :</h4>
                  <p><span />  <span /> computer science and engineering</p>
                </div>
                <h4>cgpa : <span style={{ color: "white" }}> 8.34</span></h4>

              </div>

              <p id='heading'>Intermediate</p>
              <div className='content_2 card'>
                <div>
                  <h4>School :</h4>
                  <p><span />  <span /> Delhi public school ,Bokaro</p>
                </div>
                <h4>Percentage :<span style={{ color: "white" }}> 95.4 %</span></h4>

              </div>
              <p id='heading'>matriculation</p>
              <div className='content_3 card'>
                <div>
                  <h4>School :</h4>
                  <p><span />  <span /> St.Stephen's School</p>
                </div>
                <h4 >Percentage : <span style={{ color: "white" }}> 94.6 %</span></h4>

              </div>

            </div>
            <div className="card2">
              <h2 id='main_h'>skills</h2>
              <div className='skills'>
              
                  <li>C</li> <li>C++</li> <li>Java</li> <li>Python</li> <li>Javascript</li>
                
              </div>
              <div className='skills'>
              
                  <li>React.js</li> <li>Node.js</li> <li>Express</li> <li>MongoDb</li> <li>SQL</li>
                
              </div>

              <div className='skills'>
              
                  <li>Material ui</li> <li>Tailwind css</li>
                
              </div>
              <div className='skills'>
              
                  <li>HTML</li> <li>CSS</li>
                
              </div>


            </div>
          </div>

        </section>

        <section className="skills">

        </section>
      </div>
    </>
  )
}

export default Home
