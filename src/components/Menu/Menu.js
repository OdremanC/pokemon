import React, { useState } from 'react';
import './styles.scss';

/**
 * @description Metodo para armar los items de menu
 * @param { Object } props
 */
function Menuitems({data = [], callback = () => {}}){
  const [selected, setSelected] = useState(false);
  const handleClick = (item, key) => {
    setSelected(key);
    callback(item);
  }
  return(
    <div className="menu-item-container">
      {
        data.map((item, key) => {
          return (
            <div 
              key={key} 
              onClick={() => handleClick(item, key)} 
              className={`menu-item ${selected === key && 'selected'}`}
              data={item}
            >
              <div className='pokeball'></div>
              { item.name }
            </div>            
          ) 
        })
      }
    </div>
  );
}

function MenuApp(props) {
  const handlePokemonSelected = ({url='', name='', id=''}) => {
    props.getPokemon({url, name, id});
  }
  return(
    <div className="menu-container">
      <div className="items">
          <Menuitems {...props} callback={(value)=> handlePokemonSelected(value)}/>
      </div>
    </div>
  )
}

export default MenuApp;