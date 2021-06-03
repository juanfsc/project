import React from 'react'

export default function Navbar(){
    return(
    <div>
        <nav>
            <div class="nav-wrapper grey">
            <a href="#!" class="brand-logo">Skates</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right">
                <li><a href=""><i class="material-icons">shopping_cart</i></a></li>
                <li><a href=""><i class="material-icons">person</i></a></li>
            </ul>
            <ul class="right hide-on-med-and-down">
                <li><a href="">Inline Skates</a></li>
                <li><a href="">Roller Skates</a></li>
                <li><a href="">Protection</a></li>
                <li><a href="">Clothing</a></li>
                
            </ul>
            
            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
                <li><a href="">Inline Skates</a></li>
                <li><a href="">Roller Skates</a></li>
                <li><a href="">Protection</a></li>
                <li><a href="">Clothing</a></li>
        </ul>
          
    </div>
    )
}