import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedClass } from '../../../../../store/slices/trainSlice';
import styles from './CoachTypeItem.module.scss';

const CoachTypeItem = ({ coach, direction }) => {
   const dispatch = useDispatch();
   const [iconActive, setIconActive] = useState(false);
   const clickHandler = () => {
      setIconActive(!iconActive);
      dispatch(
         setSelectedClass({ direction, name: coach.name, value: !iconActive })
      );
   };
   const icon = iconActive ? coach?.imgActive : coach?.img;

   return (
      <button type="button" className={styles.type} onClick={clickHandler}>
         <div className={styles.icon}>
            <img src={icon} alt={`иконка - ${coach?.nameRus}`} />
         </div>
         <span className={styles.name}>{coach?.nameRus}</span>
      </button>
   );
};

export default CoachTypeItem;
