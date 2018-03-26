import { withState, compose } from 'recompose'

export default compose(
  withState('currentPage', 'setCurrentPage', 1),
  withState('totalPages', 'setTotalPages', 10)
)
