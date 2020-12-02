import React from 'react'
import Menu from './Menu'
import '../index.css'
import Link from './Link'



export default function Base(props) {
    return (
        <>
        <div className="container-fluid">
            <Menu></Menu>  
            {props.children}
            
<footer className="page-footer font-small cyan darken-3">

  
  <div className="container">
    <div className="row">

      <div className="col-md-12 ">
          <div className="my-icons">
        <div className="mb-5 flex-center">
        
        <Link goto="https://www.facebook.com/HPARIKH007" target="_blank" className="fb-ic">
          <i className="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
        </Link>
        <Link goto="https://twitter.com/HenilParikh" target="_blank" className="tw-ic">
        <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </Link>
        <Link goto="mailTo:parikhhenil@gmail.com" target="_blank" className="gplus-ic">
        <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </Link>
        <Link goto="https://www.linkedin.com/in/henil-parikh-15b90b178/" target="_blank" className="li-ic">
        <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </Link>
        <Link goto="" target="_blank" className="ins-ic">
        <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
        </Link>
         
        </div>
      </div>
     
      </div>
      <div className="col-12">
      <div className="footer-copyright text-center pb-2">© 2020 Copyright:
      <a href="mailTo:parikhhenil@gmail.com"> Henil Parikh</a>
    </div>
      </div>
    </div>
    
  </div>
 

  
  
 
</footer>
    </div>
       
        </>
    )
}
