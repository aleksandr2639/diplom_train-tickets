import ProgressBarItem from './ProgressBarItem/ProgressBarItem';
import steps from '../../data/steps/steps';
import styles from './ProgressBar.module.scss';

const ProgressBar = ({ step }) => {
   return (
      <div className={styles.wrapper}>
         {steps.map((item) => (
            <ProgressBarItem
               key={item.id}
               step={step}
               number={item.number}
               id={item.id}
               name={item.name}
               img={item.img}
               totalSteps={steps.length}
            />
         ))}
      </div>
   );
};

export default ProgressBar;
