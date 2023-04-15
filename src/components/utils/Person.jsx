import React, {useState, useRef} from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import {checkPhotoPath} from "../../helpers/checkPhotoPath";

const Person = (props) => {
  const {person={}} = props
  const firstName='', lastName='', image=null, birthDate='', place=0
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setShowMenu(false));

  return (
    <div className='person'>
      <button type='button' className='person-btn' onClick={() => setShowMenu(!showMenu)}>
        <img src={checkPhotoPath(image, true)} alt="replace" />
        <div>
          <div className='name'>{firstName+' '+lastName}</div>
          <div className='text'>{birthDate}</div>
        </div>
        {
          true &&
          <div className='winner'></div>
        }
        {
          place !== 0 &&
          <div className='place'>{2}</div>
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