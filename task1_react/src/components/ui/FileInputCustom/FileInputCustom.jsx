import { useState } from 'react'
import fileSvg from '../../../assets/file.svg'
import style from './FileInputCustom.module.scss'

const FileInputCustom = () => {
	const [selectedFile, setSelectedFile] = useState(null)

	const handleFileChange = event => {
		const file = event.target.files[0]
		setSelectedFile(file)
	}

	return (
		<div className={style.inputFile}>
			<label htmlFor='file-input'>
				{!selectedFile ? (
					<div>
						<span>Прикрепите файл </span>
						<img src={fileSvg} alt='file' />
					</div>
				) : (
					selectedFile.name
				)}
			</label>
			<input id='file-input' type='file' onChange={handleFileChange} />
		</div>
	)
}

export default FileInputCustom
