/*
 * @file component List
 */

import React, { PropTypes } from 'react';
import ListItem from '../ListItem';
// 无状态组件
const propTypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

// 循环展示子组件的时候每个子组件都有一个唯一的key值
function List({ items, onSelect }) {
  const itemsContent = items.map(
    item => (
      <ListItem
        item={item}
        key={item.id}
        onClick={() => onSelect(item.id)}
      />
    )
  );

  return (
    <div className="list-component">
      {itemsContent}
    </div>
  );
}

List.propTypes = propTypes;

export default List;
