// import '../utils/enzymeConfig'

// import * as React from 'react'
// import { mount } from 'enzyme'
// import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'react-router-redux'
// import CounterPage from '../../app/containers/CounterPage'
// import { IndexState } from '../../app/reducers'

// const CounterPageAny = CounterPage as any
// let { configureStore, history } = require('../../app/store/configureStore')

// function setup(initialState?: IndexState) {
//   const store = configureStore(initialState)
//   const app = mount(
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <CounterPageAny />
//       </ConnectedRouter>
//     </Provider>
//   )
//   return {
//     app,
//     buttons: app.find('button'),
//     p: app.find('.counter')
//   }
// }

// describe('containers', () => {
//   describe('App', () => {
//     it('should display initial count', () => {
//       const { p } = setup()
//       expect(p.text()).toMatch(/^0$/)
//     })

//     it('should display updated count after increment button click', () => {
//       const { buttons, p } = setup()
//       buttons.at(0).simulate('click')
//       expect(p.text()).toMatch(/^1$/)
//     })

//     it('should display updated count after descrement button click', () => {
//       const { buttons, p } = setup()
//       buttons.at(1).simulate('click')
//       expect(p.text()).toMatch(/^-1$/)
//     })

//     it('shouldnt change if even and if odd button clicked', () => {
//       const { buttons, p } = setup()
//       buttons.at(2).simulate('click')
//       expect(p.text()).toMatch(/^0$/)
//     })

//     it('should change if odd and if odd button clicked', () => {
//       const { buttons, p } = setup({ counter: 1 })
//       buttons.at(2).simulate('click')
//       expect(p.text()).toMatch(/^2$/)
//     })
//   })
// })
