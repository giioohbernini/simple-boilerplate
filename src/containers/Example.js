import { withState, withHandlers, compose } from 'recompose'

export default compose(
  withState('counter', 'setCounter', 0),
	withHandlers({
    handleClick: ({ counter, setCounter, name }) => type => () => {
      console.log('nome aqui', name)
      type === 'more'
        ? setCounter(counter + 1)
        : setCounter(counter - 1)
    }
	})
)
