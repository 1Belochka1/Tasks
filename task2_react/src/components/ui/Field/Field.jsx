import { IoSearchOutline } from 'react-icons/io5'

import styles from './Field.module.scss'

const Field = ({ type, placeholder, value, onChange }) => {
	return (
		<div className={styles.wrapper}>
			<input
				className={styles.input}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			<IoSearchOutline className={styles.icon} />
		</div>
	)
}
export default Field
