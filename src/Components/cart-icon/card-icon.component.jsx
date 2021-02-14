import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../pages/redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './card-icon.style.scss'

const CardIcon = ({toggleCartHidden}) => {

    return <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>

}

const mapDispatchToProps = dispatch =>({

    toggleCartHidden:() => dispatch(toggleCartHidden())

})

export default connect(null,mapDispatchToProps )(CardIcon);