import React from 'react'


function Navbar(props) {
    const { brand,children } = props;
    return <>
        <nav>
            <div class="nav-wrapper grey">
                <a href="#!" class="brand-logo">{brand}</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                {children}
            </div>
            
        </nav>
        

    </>
}
export default Navbar;