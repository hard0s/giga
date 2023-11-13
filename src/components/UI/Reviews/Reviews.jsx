import cl from "./Reviews.module.css"
import {AiFillStar} from 'react-icons/ai'

import feedbackFirstPic from './/pics/feedbackFirstPic.jpg'
import feedbackSecondPic from './/pics/feedbackSecondPic.jpg'

function Reviews() {
    return (
        <div>
            <p className = {cl.mainFeedbackP}>Отзывы наших покупателей</p>
            <div className = {cl.feedbacks}>
                <div className = {cl.firstFeedbackBody}>
                    <div className = {cl.feedbackPicture}>
                        <img src = {feedbackFirstPic} className = {cl.firstPicture}></img>
                    </div>
                    <div className = {cl.feedbackInfo}>
                        <div className = {cl.starDivFeedback}>
                            <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} />
                        </div>
                        <p className = {cl.feedbackText}>Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.</p>
                        <div className = {cl.feedbackFooter}>
                            <p className = {cl.leftText}>Анна Котлова</p>
                            <p className = {cl.rightText}>23.05.2021</p>
                        </div>
                    </div>
                </div>  

                <div className = {cl.secondFeedbackBody}>
                    <div className = {cl.feedbackPicture}>
                        <img src = {feedbackSecondPic} className = {cl.feedbackSecondPic}></img>
                    </div>
                    <div className = {cl.feedbackInfo}>
                        <div className = {cl.starDivFeedback}>
                            <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} /> <AiFillStar className = {cl.footerStar} />
                        </div>
                        <p className = {cl.feedbackText}>Заказываю постоянно одежду в этом магазине! Хорошие цены, хорошее качество! Приятные менеджеры! Все быстро, доступно, удобно! Спасибо.</p>
                        <div className = {cl.feedbackFooter}>
                            <p className = {cl.leftText}>Анна Котлова</p>
                            <p className = {cl.rightText}>23.05.2021</p>
                        </div>
                    </div>
                </div>  

                <div className = {cl.feedbackButton}>
                    <div className = {cl.feedbackIcon}>
                        <div className = {cl.feedbackImg}>
                            <svg className = {cl.elipseButtonArrow} xmlns="http://www.w3.org/2000/svg" width="50" height="8" viewBox="0 0 80 8" fill="none"><path d="M79.3536 4.35355C79.5488 4.15829 79.5488 3.84171 79.3536 3.64645L76.1716 0.464466C75.9763 0.269204 75.6597 0.269204 75.4645 0.464466C75.2692 0.659728 75.2692 0.976311 75.4645 1.17157L78.2929 4L75.4645 6.82843C75.2692 7.02369 75.2692 7.34027 75.4645 7.53553C75.6597 7.7308 75.9763 7.7308 76.1716 7.53553L79.3536 4.35355ZM0 4.5H79V3.5H0V4.5Z" fill="#514A7E"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <button className = {cl.addFeedback}>Добавить отзыв</button>
        </div>
    )
}

export default Reviews