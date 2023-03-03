import React from 'react';
import './style.css';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store} from './store';
import { up } from './counterSlice';

export default function App() {
  /*
    Provider는 react-redux에서 가져온다.
  */

  return (
    <div>
      <Provider store={store}> 
        <Counter />
      </Provider>
    </div>
  );
}

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state =>{
    console.log(state); // state의 프로퍼티로 store의 reuder에 등록된 counter가 들어간다.
    return state.counter.value;
  });
  return (
    <div>
      <input type="button" value={count} onClick={() => {
        // dispatch({type:'counter/up', step:2}); 이렇게 할 수도 있고
        // 리덕스 툴킷을 이용하여 액션을 생성할 수 있다.
        dispatch(up(2)); // 여기서 인자는 payload라는 것으로 들어간다
      }}></input>
    </div>
  );
};

// 다음 스텝.
// 보통은 파일을 나눈다. 