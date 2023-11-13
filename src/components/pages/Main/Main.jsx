import cl from './Main.module.css';

import {AiOutlineMenu} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {PiHeartThin} from 'react-icons/pi'
import {BsHandbag} from 'react-icons/bs'

import Header from '../../UI/Header/Header';
import UpperMain from '../../UI/UpperMain/UpperMain';
import SideCircle from '../../UI/SideCircle/SideCircle';
import Choose from '../../UI/Choose/Choose';
import Promotions from '../../UI/Promotions/Promotions';
import Reviews from '../../UI/Reviews/Reviews';
import SecondSideCircle from '../../UI/SecondSideCircle/SecondSideCircle';
import Cooperation from '../../UI/Cooperation/Cooperation';
import FAQ from '../../UI/FAQ/FAQ'
import Application from '../../UI/Application/Application';
import Footer from '../../UI/Footer/Footer'
import Menu from '../../UI/Menu/Menu';
import { useState } from 'react';

function Main() {
  const [showMenu, setShowMenu] = useState(false)
  const onClick = () => { setShowMenu(current => !current) }
  // if (setShowMenu(true)) 
  // {
  //   setShowMenu(true)
  // } else {
  //   setShowMenu(false)
  // }
  return (
    <div className = {cl.root}>
        <div className = {cl.upper}>
            <div className = {cl.header}>
              <AiOutlineMenu className = {cl.menuButton} onClick = {onClick}/>
            <div className = {cl.headerRightSide}>
              <BsSearch  className = {cl.searchButton}/>
              <input className = {cl.searchInput}></input>
              <AiOutlineUser className = {cl.profileButton} />
              <PiHeartThin className = {cl.favouriteButton} />
              <BsHandbag className = {cl.cartButton} />
            </div>
            </div>
            { showMenu && <Menu /> }
            <UpperMain />
            <SideCircle />
            <Choose />
            <Promotions />
            <Reviews />
            <SecondSideCircle />
            <FAQ />
            <Cooperation />
    </div> 
        <div className = {cl.footer}>
            <Application />
            <Footer />
        </div> 
    </div> 
  );
}

export default Main;
