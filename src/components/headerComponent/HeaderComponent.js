import React from 'react' ;
import { Link } from 'react-router-dom';
import './HeaderStyles.scss'
import { auth } from '../firebase/Firebase.utils';
import { connect } from 'react-redux';
import {ReactComponent as ShopppingIcon} from '../../assets/shopping-bag.svg';
import CustomButton from '../CustomButton/CustomButton'


const HeaderComponent = ({currentUser } ) => (
    <div className='header'>
        <Link className='title' to="/">
            {/* <Logo className="logo" /> */}
            UNITE
        </Link>
        <cartIcons/>
        <div className='options'>
            <Link className='option' to='./shop'>
                SHOP
            </Link>
            <Link className='option' to='./shop'>
                ABOUT
            </Link>
            
            {
                currentUser ? ( 
                     <div className='option' onClick={() => auth.signOut()}>
                    SIGN_OUT
                      </div>
                 ): ( 
                 <Link className='option' to="/signin">
                    SIGN_IN
                 </Link>
                 )
            }
               <div className='cart-icon'>
        <ShopppingIcon  className=' shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
        </div>
     {/* <cartDropdown/> */}
  
        <div className='cart-dropdown'>
    <div className='cart-items' />
   <CustomButton>Go to checkout</CustomButton>

    </div>
    </div>

)

const mapStateToProps = state => ({
currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(HeaderComponent)