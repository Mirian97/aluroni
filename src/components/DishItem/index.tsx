import classNames from 'classnames'
import dishList from 'constants/dishList'
import { memo } from 'react'
import { formatMoneyBRL } from 'utils/formatters'
import styles from './DishItem.module.scss'

type IDishItem = (typeof dishList)[0]

const DishItem = (props: IDishItem) => {
  const {
    title,
    description,
    serving,
    size,
    price,
    photo,
    category: { label }
  } = props

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__type]: true,
              [styles[`item__type__${label.toLowerCase()}`]]: true
            })}
          >
            {label}
          </div>
          <div className={styles.item__portion}>{size}g</div>
          <div className={styles['item__amount-people']}>Serve {serving} pessoas</div>
          <div className={styles.item__value}>{formatMoneyBRL(price)}</div>
        </div>
      </div>
    </div>
  )
}

export default memo(DishItem)
