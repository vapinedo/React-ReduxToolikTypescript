// import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export default function CakeView() {

  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  
  return (
    <article>
        <h2>Number of Cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order cake</button>
        <button onClick={() => dispatch(restocked(5))}>Restocke cakes</button>
    </article>
  )
}
