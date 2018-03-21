import { withState, withHandlers, compose } from 'recompose'

export default compose(
  withState('counter', 'setCounter', 0),
	withHandlers({
    handleClick: ({ counter, setCounter }) => type => () => {
      type === 'more'
        ? setCounter(counter + 1)
        : setCounter(counter - 1)
    }
	})
)
