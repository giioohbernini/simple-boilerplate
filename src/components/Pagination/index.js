import Reactnator from 'reactnator'
import paginationContainer from 'containers/Pagination'
import './Pagination.styl'

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => (
  <Reactnator
    total={totalPages}
    currentPage={currentPage}
    onChange={page => setCurrentPage(page)}
    scrollTo={{ speed: 400, selector: 'body', offset: 20 }}
  />
)

export default paginationContainer(Pagination)
