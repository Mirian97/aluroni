import classNames from 'classnames'
import orderList, { IOrderOptions } from 'constants/orderList'
import { Dispatch, SetStateAction, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import styles from './OrderSelect.module.scss'

type IOrderItem = (typeof orderList)[0]

interface IOrderSelect {
  orderList: Array<IOrderItem>
  activeOrder: IOrderOptions
  setActiveOrder: Dispatch<SetStateAction<IOrderOptions>>
}

const OrderSelect = ({ orderList, activeOrder, setActiveOrder }: IOrderSelect) => {
  const [showOptions, setShowOptions] = useState(false)
  const toggleShowOptions = () => setShowOptions(!showOptions)
  const closeOptions = () => setShowOptions(false)
  const selectOrderOption = (optionName: IOrderOptions) => setActiveOrder(optionName)
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
      <span>{activeOrder || 'Ordernar por'}</span>
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
            onClick={() => selectOrderOption(name)}
          >
            {name}
          </span>
        ))}
      </div>
    </button>
  )
}

export default OrderSelect
