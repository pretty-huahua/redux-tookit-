import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { countadd, countoff } from './store/festures/counterSlice'
import { changeName, addAge } from './store/festures/showNameSlice'
import { getMovieData } from './store/festures/movieSlice'
function App() {
  // 通过useSelector直接拿到store中定义的value
  const [amount, setAmount] = useState(1)
  const { value } = useSelector((store) => store.counter)
  const { myName, age } = useSelector((store) => store.showName)
  const { list } = useSelector((store) => store.movie)

  // 通过useSelector直接拿到store中定义的list

  // 通过useDispatch 派发事件
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <p>{value}</p>
        <input value={amount} onChange={(e) => setAmount(+e.target.value)} />
        <button
          onClick={(e) => {
            dispatch(countadd({ value: value + 1 }))
          }}
        >
          加{amount}
        </button>

        <button
          onClick={(e) => {
            dispatch(countoff({ value: value - 1 }))
          }}
        >
          减{amount}
        </button>
        <h1>
          我是{myName}年龄是{age}岁
        </h1>
        <button
          onClick={() => {
            dispatch(changeName({ name: '顺义' }))
          }}
        >
          点我显示名字
        </button>
        <button
          onClick={() => {
            dispatch(addAge())
          }}
        >
          点我增加年龄
        </button>
        <br />

        <button
          onClick={() => {
            dispatch(getMovieData())
          }}
        >
          点我请求一个电影列表
        </button>
        <ul>
          {list.map((item) => {
            return <li key={item.tvId}> {item.name}</li>
          })}
        </ul>
      </header>
    </div>
  )
}

export default App
