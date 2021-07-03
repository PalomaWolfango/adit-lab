import React from 'react';
import NavigationMenu from '../global-components/NavigationMenu';
import Hero from './Hero';

const Header = (props) => {

    return (
        <header>
            <NavigationMenu />
            <Hero background={props.background}/>
        </header>
    );
}

export default Header;
