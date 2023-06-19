import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import styles from './CustomSelect.module.scss'

const CustomSelect = ({ data, title, select, setSelect }) => {
	const [isOpen, setIsOpen] = useState(false)

	const selectItemsRef = useRef()
	const selectTitleRef = useRef()

	useEffect(() => {
		if (!isOpen) return

		const handler = e => {
			if (!selectItemsRef.current) return
			if (
				!selectItemsRef.current.contains(e.target) &&
				!selectTitleRef.current.contains(e.target)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
		}
	}, [isOpen])

	return (
		<div className={styles.wrapper}>
			<div
				className={classNames([styles.title], {
					[styles.active]: isOpen,
				})}
				onClick={() => setIsOpen(prev => !prev)}
				ref={selectTitleRef}
			>
				{select?.title || title}
				<IoChevronDown
					className={classNames([styles.arrow], { [styles.open]: isOpen })}
					size={20}
				/>
			</div>
			{isOpen && (
				<div className={styles.items} ref={selectItemsRef}>
					{data.map(item => {
						return (
							<div
								className={classNames([styles.item], {
									[styles.activeItem]: item.value === select.value,
								})}
								key={item.value}
								onClick={() => {
									setSelect(item)
									setIsOpen(false)
								}}
							>
								{item.title}
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default CustomSelect
