// index.ts 文件

import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './festures/counterSlice'
import showNameSlice from './festures/showNameSlice'
import movieSlice from './festures/movieSlice'

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    counter: counterSlice,
    showName: showNameSlice,
    movie: movieSlice,
  },
})

export default store
