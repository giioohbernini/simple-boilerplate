import exampleContainer from 'containers/Example'

import './Example.styl'

const Example = ({ counter, handleClick, name }) => (
  <div className="example">
    <h1 className="example__title">{name} {counter}</h1>
    <button onClick={handleClick('more')}>More</button>
    <button onClick={handleClick('less')}>Less</button>
  </div>
)

export default exampleContainer(Example)
