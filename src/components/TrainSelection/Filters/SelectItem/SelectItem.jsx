import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from 'antd';
import { selectSort, changeSort } from '../../../../store/slices/sortSlice';

//import 'antd/dist/antd.css';
import './SelectItem.scss';

function SelectItem({ options, onChangeFilters }) {
   const dispatch = useDispatch();
   const activeOption = useSelector(selectSort);
   const handleChange = (value) => {
      dispatch(changeSort({ label: value.label, value: value.value }));
      onChangeFilters();
   };
   return (
      <div className="select-item">
         <Select
            options={options}
            bordered={false}
            defaultValue={activeOption}
            onChange={handleChange}
            labelInValue
            popupClassName="filters-select"
         />
      </div>
   );
}

export default SelectItem;
