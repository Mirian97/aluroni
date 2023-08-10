import classNames from 'classnames'
import filterList from 'constants/filterList'
import { Dispatch, SetStateAction } from 'react'
import styles from './Filter.module.scss'

type IFilterOption = (typeof filterList)[0]

interface IFilter {
  filterList: Array<IFilterOption>
  activeFilter: number | null
  setActiveFilter: Dispatch<SetStateAction<number | null>>
}

const Filter = ({ filterList, activeFilter, setActiveFilter }: IFilter) => {
  const selectFilterOption = (optionId: number) =>
    activeFilter === optionId ? setActiveFilter(null) : setActiveFilter(optionId)

  return (
    <div className={styles.filter}>
      {filterList.map(({ id, label }) => (
        <button
          className={classNames({
            [styles['filter__filter-item']]: true,
            [styles['filter__filter-item--active']]: activeFilter === id
          })}
          key={id}
          onClick={() => selectFilterOption(id)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default Filter
