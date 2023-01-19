import React from 'react' ;
import { Link } from 'react-router-dom';
import './HeaderStyles.scss'
import { auth } from '../firebase/Firebase.utils';
import { connect } from 'react-redux';


const HeaderComponent = ({currentUser } ) => (
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
        </div>
    </div>
)

const mapStateToProps = state => ({
currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(HeaderComponent)