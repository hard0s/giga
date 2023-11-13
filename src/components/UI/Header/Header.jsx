import cl from "./Header.module.css"
import {AiOutlineMenu} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {PiHeartThin} from 'react-icons/pi'
import {BsHandbag} from 'react-icons/bs'

function Header() {
    return (
        <div className = {cl.header}>
            <AiOutlineMenu className = {cl.menuButton}/>
            <div className = {cl.headerRightSide}>
                <BsSearch  className = {cl.searchButton}/>
                <input className = {cl.searchInput}></input>
                <AiOutlineUser className = {cl.profileButton} />
                <PiHeartThin className = {cl.favouriteButton} />
                <BsHandbag className = {cl.cartButton} />
            </div>
        </div>
    )
}

export default Header