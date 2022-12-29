import React from 'react' ;
import { Link } from 'react-router-dom';
import './HeaderStyles.scss'

const HeaderComponent = ( ) => (
    <div className='header'>
        <Link className='title' to="/">
            {/* <Logo className="logo" /> */}
            UNITE
        </Link>
        <div className='options'>
            <Link className='option' to='./shop'>
                SHOP
            </Link>
            <Link className='option' to='./shop'>
                ABOUT
            </Link>
            <Link className='option' to='./signin'>
                SIGN_IN
            </Link>
        </div>
    </div>
)

export default HeaderComponent