import React, {useCallback} from 'react';
import Card from '../Card/Card';
import './styles.scss';

function List({data = [], getSelectedPokemon = () => {}, selected = {} }){
  const onSelectPokemon = useCallback((url = '', id= 0, name = '') =>{
    getSelectedPokemon({url, id, name});
  })
  return (
    <section className='home'>
    {
      data.length && data.map(({name, id, url}, index) => (
        <Card 
          id={id} 
          name={name} 
          key={index} 
          onSelect={() => { onSelectPokemon(url, id, name) }} 
          selectedClass={id === selected.id? 'selected' : ''}
        />
      ))
    }
  </section>
  )
}

export default List;