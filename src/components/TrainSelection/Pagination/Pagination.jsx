import React from 'react';
import { Pagination } from 'antd';

//import 'antd/dist/antd.css';
import './Pagination.scss';

function PaginationItem({ current, onChange, total, pageSize }) {
   return (
      <section className="pagination">
         <Pagination
            current={current}
            total={total}
            hideOnSinglePage
            onChange={onChange}
            showLessItems
            showSizeChanger={false}
            pageSize={pageSize}
         />
      </section>
   );
}

export default PaginationItem;
