import React from 'react'
import Base from './Base'
import '../index.css'
import logo from './man.svg'
import Card from './Card'
import List from './List'



export default function Main() {


    const web=["HTML","CSS","Bootstrap","Jquery"];
    const languages=["Java","Javascript","PHP"];
    const databases=["MySQL","Oracle","Pl/SQL","MongoDB","SQL Server"];
    const frameWork=["Android","React","NodeJS","Express","Flutter"]

    const projectDetails={
        youfeedMe:{
            youtube:"https://www.youtube-nocookie.com/embed/H6mrLsCjFOg",
            description:"YoufeedMe is an Android application which is used to subscribe Meal service from the vendors.It consits of two applications one for vendor, one for user and also a user Web application. User can subscibe meals on monthly or weekly basis and can see daily updated menu",
            technologies:["React","NodeJS","MONGODB","JAVA","ANDROID","FIREBASE","EXPRESS"],
        },
        eor:{
            youtube:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6668764355653316608?compact=1",
            description:"This is an Android application that is based on a shared economy model. The concept behind this application is to change the liabilities of your household to your asset so even if you are sitting in your home or doing your job, your assets can go and earn you some extra money and vice versa. Also, you can just rent a product, which you only need to use once, and not buy it saving your money",
            technologies:["PHP","MYSQL","JAVA","ANDROID","FIREBASE","OAUTH"]
        }

    }
    return (
        <Base>
        <div  className="first-block">
        <div id="home" className="row">
            <div  className="col-12 myData">
                <div  className="myPhoto">
                <img src={logo}  alt="..." className="img-thumbnail"/>
                <p className="name">Henil Parikh</p>
                <hr/>
                <p className="position">Software Developer, Toronto CA</p>
                </div>
            </div>
           
        </div>
        </div>
        


        <div id="about" className="row">
            <div className="col-lg-6 col-12">
                <div className="myBox">
                 <h5 className="title">About</h5>
                 <p>I am<span className="name-about"> Henil Parikh</span>, an enthusiastic Software Developer who loves to build applications and help the clients. I have finished
                    my Bachelors in Information Technology and now I am looking for enrty-level Software Developer role with a company who has
                    long term goals.
                 </p>

                 <p> I am an extrovert person who loves to connect with new people. I am also a Team player who can co-ordinate with the the team and
                    bring solutions to new challenges.</p> 
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <div className="myBox">
                <h5 className="title">Skills</h5>
                <div className="row">
                    <div className="col">
                        <h5 style={{marginLeft:"12px"}}>Web</h5>
                        <List data={web}/>
                    </div>
                    <div className="col">
                    <h5>Languages</h5>
                        <List data={languages}/>
                    </div>
                    <div className="col">
                    <h5>Databases</h5>
                        <List data={databases}/>
                    </div>
                    <div className="col">
                    <h5>Framework</h5>
                        <List data={frameWork}/>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div id="project" className="row">
            <div className="col">
            <h5 className="title">Projects</h5>
            <div className="project-card">
                <div className="card-deck">
                    <Card image={projectDetails.youfeedMe.youtube} tech={projectDetails.youfeedMe.technologies} title="YoufeedMe" details={projectDetails.youfeedMe.description}></Card>
                    <Card image={projectDetails.eor.youtube} tech={projectDetails.eor.technologies} title="Everything On Rent" details={projectDetails.eor.description}></Card>
                </div>
                </div>
            </div>
        </div>
        </Base>
    )
}
