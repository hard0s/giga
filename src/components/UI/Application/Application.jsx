import cl from "./Application.module.css"

function Application() {
    return (
        <div className = {cl.applicationOuter}>
                <div className = {cl.applicationInner}>
                    <div className = {cl.innerContent}>
                        <p className = {cl.applicationMainText}>Приглашаем  к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров</p>
                        <input className = {cl.nameInput} placeholder = "Ваше имя"></input>
                        <input className = {cl.phoneInput} placeholder = "Номер телефона"></input>
                        <input className = {cl.emailInput} placeholder = "Электронная почта"></input>
                        <div className = {cl.personalData}>
                            <input className = {cl.roundInput} type = "checkbox" />
                            <p className = {cl.personalDataP}>Даю согласие на обработку персональных данных</p>
                        </div>
                        <div className = {cl.sendButtonDiv}>
                            <button className = {cl.sendButton}>Отправить
                            <svg className = {cl.arrowSendButton} xmlns="http://www.w3.org/2000/svg" width="40  " height="10" viewBox="0 0 26 5" fill="none">
                                <path d="M25.1768 2.83693C25.2744 2.7393 25.2744 2.58101 25.1768 2.48338L23.5858 0.892389C23.4882 0.794758 23.3299 0.794758 23.2322 0.892389C23.1346 0.99002 23.1346 1.14831 23.2322 1.24594L24.6464 2.66016L23.2322 4.07437C23.1346 4.172 23.1346 4.33029 23.2322 4.42792C23.3299 4.52555 23.4882 4.52555 23.5858 4.42792L25.1768 2.83693ZM0 2.91016H25V2.41016H0V2.91016Z" fill="#FFFDF5"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Application