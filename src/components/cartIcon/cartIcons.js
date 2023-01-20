import React from 'react';
import {ReactComponent as ShopppingIcon} from '../../assets/shopping-bag.svg';
import './cartIcon.scss'


 const cartIcons = () => (
    <div className='cart-icon'>
        <ShopppingIcon  className=' shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

export default cartIcons;