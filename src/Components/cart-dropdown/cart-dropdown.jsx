import React from 'react';
import CustomButton from '../button-component/button.component';

import './cart-dropdown.style.scss'

const CartDropdown = () => {

return <div className="cart-dropdown">
    <div className="cart-items">
        <CustomButton> GO TO CHECKOUT </CustomButton>  
    </div>
</div>


}

export default CartDropdown;