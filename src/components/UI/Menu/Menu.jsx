import cl from './Menu.module.css';
import LogoMenu from './/pics/LogoMenu.png'

function Menu() {
  return (
    <div className = {cl.root}>
        <img src = {LogoMenu} className = {cl.LogoMenu} alt = "picture" />
        <div className = {cl.menuCategories}>
            <p className = {cl.firstMenuP}>Женщинам</p>
            <p className = {cl.menuP}>Мужчинам</p>
            <p className = {cl.menuP}>Детям</p>
            <p className = {cl.menuP}>Обувь</p>
            <p className = {cl.menuP}>Игрушки</p>
            <p className = {cl.menuP}>Акессеуары</p>
            <p className = {cl.menuP}>Большие размеры</p>
            <p className = {cl.menuP}>Дополнительно</p>
            <p className = {cl.menuP}>Акции</p>
        </div>
    </div>
  )
}

export default Menu;
