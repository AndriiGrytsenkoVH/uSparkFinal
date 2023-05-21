import React from 'react'
import "../Styles/YourDevelopers.css"
// import andrewpic from '../images/tinywow_MyPhoto_Cut_13515924.jpg'
// TODO clean up before production
import andrewpic from '../images/MyPhoto_Cut.jpg'

export default function YourDevelopers() {
  return (
    <>
    <h1 className = 'text-center my-5 title'>Your Devs</h1>

    <div className="container">
      <div className="row">
        <div className="col-6 my-3 text-center name">
          <h2>Jennifer Liu ❤️</h2> 
          <img src = 'https://media.discordapp.net/attachments/1048664987998093342/1072300888326148227/IMG_3837.jpg' className = 'pic1 mt-3'></img>
          <p className = "text-center mt-4 about">A California transplant in currently based in Denver, Colorado. Pursued a Masters in Higher Education and graduated with a BS in International Business. Enjoys the outdoors and participating in any team-oriented environment. Passionate about learning and growth through different outlets such as sports and traveling. Top channels include <a href = "https://www.youtube.com/@cnliziqi" className = 'links'>李子柒 Liziqi</a>, <a href = "https://www.youtube.com/@OutdoorBoys"className = 'links'>OutdoorBoys</a>, and <a href = "https://www.youtube.com/@PaolofromTOKYO" className = 'links'>Paolo From Tokyo.</a> </p>

        </div>
        <div className="col-6 my-3 text-center name">
          <h2>Andrew Grytskenko 😊</h2>
          <img src = {andrewpic} className = 'pic mt-3' ></img>
          <p className = "text-center mt-4 about1">A Kyiv, Ukraine native who currently lives in Naperville, Illinois. Graduated in Moscow with a degree in Applied Math and Physics. Loves to solve problems and puzzles, passionate about the engaging world of programming. Enjoying learning about the world through channels such as <a href ="https://www.youtube.com/@veritasium" className = 'links'>Vertasium</a>, <a href = "https://www.youtube.com/@smartereveryday" className = 'links'>SmarterEveryDay</a>, and <a href = "https://www.youtube.com/@Wendoverproductions" className = 'links'> Wendoverproductions</a>.</p>
        </div>
  </div>

    


    </div>
    </>

  )
}
