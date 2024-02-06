import './App.css'
import CakeView from './features/cake/CakeView'
import UserView from './features/user/UserView'
import IcecreamView from './features/icecream/IcecreamView'

export default function App() {
  return (
    <section className='app'>
      <CakeView />
      <IcecreamView />
      <UserView />
    </section>
  )
}