import React from 'react'

function Navbar (){
    return(
        <nav class="navbar navbar-default navbar-Home">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">
      	Pizzamania
      </a>
    </div>

   
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
       <ul class="nav navbar-nav navbar-right option">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Pizza</a></li>
        <li><a href="#">Pizza type</a></li>
      </ul>
    </div>
  </div>
</nav>

    )
}


export default Navbar