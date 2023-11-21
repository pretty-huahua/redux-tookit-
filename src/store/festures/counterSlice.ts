// counterSlice.ts 文件

import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  title: string
  myname: string
}
const initialState: CounterState = {
  value: 8,
  myname: '你好',
  title: 'redux toolkit pre',
}

// 创建一个 Slice
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    // 定义一个加的方法
    countadd: (state) => {
      state.value += 1
    },
    // 定义一个减的方法
    countoff: (state, action) => {
      //action = {type: 'counter/countoff', payload: {…}}
      console.log(action)

      state.value -= 1
    },
    //   // 定义一个改变myname的方法
    //   changeMyname: (state, { payload }) => {
    //     // action 里面有 type 和 payload 两个属性，所有的传参都在payload里面
    //     state.myname = payload.myname
    //   },
  },
})
// 导出加减的方法
export const { countadd, countoff } = counterSlice.actions

// 默认导出
export default counterSlice.reducer
