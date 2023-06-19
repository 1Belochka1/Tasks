import React, { useState } from 'react'
import CustomSelect from '../ui/CustomSelect/CustomSelect'
import Field from '../ui/Field/Field'
import styles from './Form.module.scss'
import { dataColorSelect, dataSizeSelect, defaultFormState } from './data.js'
const Form = () => {
	const [formState, setFormState] = useState(defaultFormState)

	const setColor = item => {
		setFormState(prev => ({ ...prev, color: item }))
	}

	const setSize = item => {
		setFormState(prev => ({ ...prev, size: item }))
	}

	const reset = () => {
		setFormState(defaultFormState)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Bring it all together</div>
			<div className={styles.description}>
				The fastest way to combine your favorite tools and APIs to build the
				fastest sites, stores, and apps for the web.
			</div>
			<form className={styles.form}>
				<div className={styles.row}>
					<div className={styles.checkbox}>
						<div
							onClick={() => {
								setFormState(prev => ({
									...prev,
									newCheckbox: !prev.newCheckbox,
								}))
							}}
						>
							<input
								type='checkbox'
								checked={formState.newCheckbox}
								onChange={e => {
									setFormState(prev => ({
										...prev,
										newCheckbox: e.target.checked,
									}))
								}}
							/>
							<span>новинки 2023</span>
						</div>
						<div
							onClick={() =>
								setFormState(prev => ({
									...prev,
									inStockCheckBox: !prev.inStockCheckBox,
								}))
							}
						>
							<input
								type='checkbox'
								checked={formState.inStockCheckBox}
								onChange={e => {
									setFormState(prev => ({
										...prev,
										inStockCheckBox: e.target.checked,
									}))
								}}
							/>
							<span>в наличии</span>
						</div>
					</div>
					{formState !== defaultFormState && (
						<button
							className={styles.resetBtn}
							type='button'
							onClick={() => {
								reset()
							}}
						>
							сбросить
						</button>
					)}
				</div>
				<Field
					type={'input'}
					placeholder='Поиск по ключевым словам ...'
					value={formState.search}
					onChange={e => {
						setFormState(prev => ({ ...prev, search: e.target.value }))
					}}
				/>
				<div className={styles.row}>
					<CustomSelect
						data={dataColorSelect}
						title={'Цвет'}
						select={formState.color}
						setSelect={setColor}
					/>
					<CustomSelect
						data={dataSizeSelect}
						title={'Размер'}
						select={formState.size}
						setSelect={setSize}
					/>
					<button className={styles.applyBtn}>Применить фильтр</button>
				</div>
			</form>
		</div>
	)
}

export default Form
