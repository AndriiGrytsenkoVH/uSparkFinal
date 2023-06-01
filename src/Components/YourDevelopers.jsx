import React from 'react'
// import "../Styles/YourDevelopers.css"
// import andrewpic from '../images/tinywow_MyPhoto_Cut_13515924.jpg'
import andrewpic from '../images/andrew_photo_square.jpg'
import jenpic from '../images/jen_photo_square.jpg'

export default function YourDevelopers() {
	return (
		<div className="container text-light text-center">
			<div className="row">
				<h1 className = 'text-center my-1'>Your Devs</h1>
			</div>
			<div className="row">
				<div className="col">
					<h2>Jennifer Liu ❤️</h2> 
				</div>
				<div className="col">
					<h2>Andrew Grytskenko 😊</h2>
				</div>
			</div>
			<div className="row">
				<div className="col d-flex">
					<img 
							src={jenpic} 
							className='img-fluid'
					></img>
				</div>
				<div className="col d-flex">
					<img 
						src={andrewpic} 
						className='img-fluid' 
					></img>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<p className = "text-center mt-4 about">
						A California transplant in currently based in Denver, Colorado. 
						Pursued a Masters in Higher Education and graduated with a BS in International Business. 
						Enjoys the outdoors and participating in any team-oriented environment. 
						Passionate about learning and growth through different outlets such as sports and traveling. 
						Top channels include <a href = "https://www.youtube.com/@cnliziqi" className = 'links'>李子柒 Liziqi</a>, <a href = "https://www.youtube.com/@OutdoorBoys"className = 'links'>OutdoorBoys</a>,
						and <a href = "https://www.youtube.com/@PaolofromTOKYO" className = 'links'>Paolo From Tokyo.</a> 
					</p>
				</div>
				<div className="col">
					<p className = "text-center mt-4">
						A Kyiv, Ukraine native who currently lives in Naperville, Illinois. 
						Graduated in Moscow with a degree in Applied Math and Physics. 
						Loves to solve problems and puzzles, passionate about the engaging world of programming. 
						Enjoying learning about the world through channels such as <a href ="https://www.youtube.com/@veritasium" className = 'links'>Vertasium</a>, 
						<a href = "https://www.youtube.com/@smartereveryday" className = 'links'>SmarterEveryDay</a>, 
						and <a href = "https://www.youtube.com/@Wendoverproductions" className = 'links'> Wendoverproductions</a>.
						</p>
				</div>
			</div>
		</div>
	)
}
