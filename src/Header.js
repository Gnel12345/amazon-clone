import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {
    return (
        <div className="header">
            <img className = "header_logo "src = "/images/MyAzon.png"/>

            <div className = "header_search">

<input className = " header_searchInput" type="text"/>
<SearchIcon
className = "header_searchIcon"/>

            </div>
            <div className = "header_nav">
                <div className ="header_option">
                    <span className = "Header-optionLineOne">Hello </span>
                    <span className = "Header-optionLineTwo"> Sign In</span>
                </div>
                <div className ="header_option">
                <span className = "Header-optionLineOne">Returns </span>
                    <span className = "Header-optionLineTwo"> & Orders</span>
                    </div>
                    <div className ="header_option">

                     <span className = "Header-optionLineOne">Your </span>
                    <span className = "Header-optionLineTwo"> Prime</span>
                    </div>
                    <div className = "header_optionBasket">
                        <ShoppingBasketIcon/>
                        <span className = "header_optionLineTwo header_basketCount">
                            0
                        </span>
                    </div>
            </div>
            
        </div>
    )
}

export default Header
