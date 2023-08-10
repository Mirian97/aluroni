import { InputHTMLAttributes, useId } from 'react'
import styles from './Input.module.scss'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  endIcon?: React.ReactNode
  labelText?: string
}

const Input = ({ className, endIcon, labelText, ...props }: IInput) => {
  const id = useId()
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {labelText}
      </label>
      <div className={styles['wrap-input']}>
        <input id={id} {...props} />
        {endIcon}
      </div>
    </div>
  )
}

export default Input
