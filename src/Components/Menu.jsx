import React, { useState } from 'react'
import '../index.css'
export default function Menu() {

  
  var prevScrollpos = window.pageYOffset;
  window.onscroll=function(){
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navigation").style.top = "0";
    } else {
      document.getElementById("navigation").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }

  function mobToggleNavBar(){
    document.getElementById('bt').classList.add('collapsed')
    document.getElementById('navbarSupportedContent').classList.remove('show')
  }

    return (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navigation">
     <a style={{color:"white"}} class="navbar-brand logo-name" href="#">Henil Parikh</a>
  <button style={{marginRight:"10px"}} id="bt" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div  className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul  className="navbar-nav  ml-auto navig-links">
      <li className="nav-item ">
        <a style={{color:"white"}} className="nav-link nav-header-links" onClick={()=>{mobToggleNavBar()}} href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item ">
        <a style={{color:"white"}} className="nav-link nav-header-links" onClick={()=>{mobToggleNavBar()}} href="#about">About <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item ">
        <a style={{color:"white"}} className="nav-link nav-header-links" onClick={()=>{mobToggleNavBar()}} href="#project">Project<span className="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>

)
}
