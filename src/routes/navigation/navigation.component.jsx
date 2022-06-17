import { Fragment, useContext, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {UserContext} from '../../contexts/user.contexts'
import { signOutUser } from '../../utils/firebase/firebase'
import './navigation.styles.scss';


const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const [hidden, setHidden] = useState(true);
    const toggleHidden = () => {
        console.log('sdfsfsdf',hidden);
        setHidden(!hidden);
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrownLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {currentUser ? (<span className='nav-link' onClick={signOutUser}>Sign out</span>)
                        : (<Link className='nav-link' to='/auth'>
                            Sign-In
                        </Link>)
                    }
                    <CartIcon  onClick={toggleHidden}/>
                </div>
                <CartDropdown ClassName={`${hidden ? 'hidden': null}`} />
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
