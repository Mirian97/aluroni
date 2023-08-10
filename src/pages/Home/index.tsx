import { ReactComponent as Logo } from 'assets/logo.svg'
import DishList from 'components/DishList'
import Filter from 'components/Filter'
import Input from 'components/Input'
import OrderSelect from 'components/OrderSelect'
import filterList from 'constants/filterList'
import orderList, { IOrderOptions } from 'constants/orderList'
import { ChangeEvent, useState } from 'react'
import { CgSearch } from 'react-icons/cg'
import styles from './Home.module.scss'

const Home = () => {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState<number | null>(null)
  const [activeOrder, setActiveOrder] = useState<IOrderOptions>('')
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  return (
    <main>
      <nav className={styles.nav}>
        <a href='/'>
          <Logo />
        </a>
      </nav>
      <header className={styles.header}>
        <h1 className={styles.header__text}>A casa do código e da massa</h1>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Input
          placeholder='Buscar...'
          type='text'
          endIcon={<CgSearch size={24} />}
          onChange={onChangeSearch}
        />
        <div className={styles.menu__filter}>
          <Filter
            filterList={filterList}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <OrderSelect
            orderList={orderList}
            activeOrder={activeOrder}
            setActiveOrder={setActiveOrder}
          />
        </div>
        <DishList activeFilter={activeFilter} search={search} activeOrder={activeOrder} />
      </section>
    </main>
  )
}

export default Home
