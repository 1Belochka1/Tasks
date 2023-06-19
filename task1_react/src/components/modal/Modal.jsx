import React from 'react'
import closeSvg from '../../assets/close-circle.svg'
import FileInputCustom from '../ui/FileInputCustom/FileInputCustom'
import style from './Modal.module.scss'

const Modal = ({ active, setActive }) => {
	if (active === false) return null

	return (
		<div className={style.modal} onClick={() => setActive(false)}>
			<div className={style.wrapper} onClick={e => e.stopPropagation()}>
				<img
					src={closeSvg}
					alt='close'
					className={style.closeBtn}
					onClick={() => setActive(false)}
				/>
				<div className={style.title}>Отправить резюме</div>
				<form action=''>
					<input type='text' placeholder='Ваше ФИО' />
					<input type='text' placeholder='Ваш телефон' />
					<input type='text' placeholder='Ваш e-mail' />

					<FileInputCustom />
					<input type='submit' className='btn' />
				</form>
			</div>
		</div>
	)
}

export default Modal
