/* eslint-disable react-hooks/exhaustive-deps */
import DishItem from 'components/DishItem'
import dishList from 'constants/dishList'
import { IOrderOptions } from 'constants/orderList'
import { useEffect, useState } from 'react'
import styles from './DishList.module.scss'

interface IDishList {
  search: string
  activeFilter: number | null
  activeOrder: IOrderOptions
}

const DishList = ({ search, activeFilter, activeOrder }: IDishList) => {
  const [dishes, setDishes] = useState(dishList)

  const checkBySearch = (title: string) => {
    const regex = new RegExp(search, 'i')
    return regex.test(title)
  }
  const checkByFilter = (id: number) => (activeFilter ? activeFilter === id : true)

  const listByOrder = (list: typeof dishList, prop: IOrderOptions) =>
    list.sort((a, b) => (a[prop] > b[prop] ? 1 : -1))

  useEffect(() => {
    const newDishList = dishList.filter(
      (dish) => checkBySearch(dish.title) && checkByFilter(dish.category.id)
    )
    setDishes(listByOrder(newDishList, activeOrder))
  }, [search, activeFilter])

  return (
    <div className={styles.list}>
      {dishes.map((dish) => (
        <DishItem key={dish.id} {...dish} />
      ))}
    </div>
  )
}

export default DishList
