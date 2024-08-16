import OptionItem from './OptionItem/OptionItem';
import options from '../../../data/options/options';

const Options = ({ onChangeOption }) => {
   return (
      <div>
         {options.map((item) => (
            <OptionItem
               key={item.id}
               title={item.title}
               img={item.img}
               name={item.name}
               onChangeOption={onChangeOption}
            />
         ))}
      </div>
   );
};

export default Options;
