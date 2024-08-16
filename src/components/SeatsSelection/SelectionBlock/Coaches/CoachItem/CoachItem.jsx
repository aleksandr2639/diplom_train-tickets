import { useSelector, useDispatch } from 'react-redux';
import {
   setSelectedCoach,
   selectSelectedCoaches,
   removeSelectedCoach,
} from '../../../../../store/slices/trainSlice';
import styles from './CoachItem.module.scss';

const CoachItem = ({ name, direction, coachId }) => {
   const dispatch = useDispatch();
   const activeCoaches = useSelector(selectSelectedCoaches)[direction];
   const sameCoach = activeCoaches?.find((el) => el.coachId === coachId);

   const clickHandler = () => {
      if (sameCoach) {
         dispatch(removeSelectedCoach({ direction, coachId }));
      } else {
         dispatch(setSelectedCoach({ direction, coachId, name }));
      }
   };
   const classNames = sameCoach
      ? `${styles.coachNames} ${styles['coachNames-active']}`
      : styles.coachNames;

   return (
      <button type="button" className={classNames} onClick={clickHandler}>
         {name}
      </button>
   );
};

export default CoachItem;
