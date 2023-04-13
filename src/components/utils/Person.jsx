import React, {useState, useRef} from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import {checkPhotoPath} from "../../helpers/checkPhotoPath";

const Person = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setShowMenu(false));

  return (
    <div className='person'>
      <button type='button' className='person-btn' onClick={() => setShowMenu(!showMenu)}>
        <img src={checkPhotoPath('', true)} alt="replace" />
        <div>
          <div className='name'>{props.person.name}</div>
          <div className='text'>{props.person.birth}</div>
        </div>
        {
          (props.person.winner) &&
          <div className='winner'></div>
        }
        {
          (props.person.place !== 0) &&
          <div className='place'>{props.person.place}</div>
        }
      </button>
      {
        (showMenu) &&
        <ul ref={ref} className='person-menu'>
          <li>
            <button type="button" className='btn-1'>Заменить участника</button>
          </li>
          <li>
            <button type="button" className='btn-1'>Удалить участника</button>
          </li>
          <li>
            <button type="button" className='btn-1'>Выбрать победителем</button>
          </li>
          <li>
            <button type="button" className='btn-1'>Победное место</button>
          </li>
        </ul>
      }
    </div>
  )
}

export default Person