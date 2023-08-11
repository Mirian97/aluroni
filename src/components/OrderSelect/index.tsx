import classNames from 'classnames'
import { IOrderList, IOrderOptions } from 'constants/orderList'
import { Dispatch, SetStateAction, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import styles from './OrderSelect.module.scss'

interface IOrderSelect {
  orderList: IOrderList
  activeOrder: IOrderOptions
  setActiveOrder: Dispatch<SetStateAction<IOrderOptions>>
}

const OrderSelect = ({ orderList, activeOrder, setActiveOrder }: IOrderSelect) => {
  const [showOptions, setShowOptions] = useState(false)
  const toggleShowOptions = () => setShowOptions(!showOptions)
  const closeOptions = () => setShowOptions(false)
  const selectOrderOption = (optionValue: IOrderOptions) => setActiveOrder(optionValue)
  const orderName = orderList.find((item) => item.value === activeOrder)?.name
  const IconSelect = showOptions ? (
    <MdKeyboardArrowUp size={24} />
  ) : (
    <MdKeyboardArrowDown size={24} />
  )

  return (
    <button
      className={classNames({
        [styles.order]: true,
        [styles['order--active']]: activeOrder !== ''
      })}
      onClick={toggleShowOptions}
      onBlur={closeOptions}
    >
      <span>{orderName || 'Ordernar por'}</span>
      {IconSelect}
      <div
        className={classNames({
          [styles.order__options]: true,
          [styles['order__options--active']]: showOptions
        })}
      >
        {orderList.map(({ name, value }) => (
          <span
            key={value}
            className={styles.order__option}
            onClick={() => selectOrderOption(value)}
          >
            {name}
          </span>
        ))}
      </div>
    </button>
  )
}

export default OrderSelect
