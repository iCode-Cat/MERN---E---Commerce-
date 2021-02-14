import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/crown.svg';
import './header.styles.scss'
import {connect} from 'react-redux'
import {auth } from '../firebase/firebase.utility'
import CardIcon from '../Components/cart-icon/card-icon.component';
import CartDropdown from '../Components/cart-dropdown/cart-dropdown';

function Header({currentUser, hidden}) {
    return (
       <div className="header">
           <NavLink className='logo-container' to="/"> 
           
           <Logo className='logo' />

           </NavLink>
           <div className="options">
               <Link className='option' to='/shop'>
                   SHOP
               </Link>
               <Link className='option' to='/shop'>
                   CONTACT
               </Link>
               {
                   currentUser ? <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div> : <Link className='option' to='/signin'>SIGN IN</Link>
               }
               <CardIcon/>
           </div>
           {
               hidden ? null : <CartDropdown/>
           }
       </div>
    )
}

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({

    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)
