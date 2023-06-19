import { useState } from 'react'
import Modal from '../../modal/modal'
import style from './Home.module.scss'

const Home = () => {
	const [activeModal, setActiveModal] = useState(false)

	return (
		<>
			<Modal active={activeModal} setActive={setActiveModal} />
			<div className={style.wrapper}>
				<div className={style.content}>
					<div className={style.title}>Нет подходящей вакансии?</div>
					<div className={style.description}>
						<p>
							Если вы не нашли в списке подходящей вакансии то можете отправить
							нам своё резюме. Мы рассмотрим его в ближайшее время.
						</p>
						<p>Заявить о себе можно несколькими способами:</p>
						<ul className={style.list}>
							<li className={style.item}>
								<span>
									воспользоваться кнопками «Откликнуться на вакансию» и
									«Отправить резюме», расположенными на этой странице
								</span>
							</li>
							<li className={style.item}>
								<span>
									прислать резюме в электронном виде на почту
									<span> test@test.ru</span>
								</span>
							</li>
							<li className={style.item}>
								<span>
									прислать резюме в бумажном виде по адресу г. Архангельск
								</span>
							</li>
						</ul>
					</div>
					<button
						onClick={() => setActiveModal(true)}
						className={style.sendBtn}
					>
						Отправить резюме
					</button>
				</div>
			</div>
		</>
	)
}

export default Home
