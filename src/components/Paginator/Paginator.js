import React, {useCallback} from 'react';
import ReactPaginate from 'react-paginate';
import './styles.scss';

export default function Paginator ({pageCount = 0, limit = 0, t = () => {}, callback = () => {}}) {
  const showOnPageChange = useCallback((selected) =>{
    let newOffset = (selected) * limit;
    callback(newOffset);
  })
  return(
    <ReactPaginate 
      pageCount={pageCount} 
      pageRangeDisplayed={7} 
      marginPagesDisplayed={2} 
      previousLabel={t('Anterior')} 
      nextLabel={t('Siguiente')} 
      onPageChange={({selected = 0}) => showOnPageChange(selected)} 
      containerClassName='paginator'
      activeClassName='pageSelected'
    />
  )
}