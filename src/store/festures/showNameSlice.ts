import { createSlice } from '@reduxjs/toolkit'
type nameI = {
  myName: string
  age: number
}
const initialState: nameI = {
  myName: '小明',
  age: 18,
}

// 创建一个slice
export const showNameSlice = createSlice({
  name: 'showName',
  initialState,
  reducers: {
    changeName: (state, action) => {
      // action 里面有 type 和 payload 两个属性，所有的传参都在payload里面
      state.myName = action.payload.name
    },
    addAge: (state) => {
      state.age += 1
    },
  },
})
export const { changeName, addAge } = showNameSlice.actions
export default showNameSlice.reducer
