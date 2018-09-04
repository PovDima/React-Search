import React from 'react'
import classNames from 'classnames';
import Button from './Button'
const Sort = (props) => {
  const sortClass = classNames(
    'button-inline',
    { 'button-active': props.sortKey === props.activeSortKey }
  );

  return (
    <Button
      onClick={() => props.onSort(props.sortKey)}
      className={sortClass}
    >
      {props.children}
    </Button>
  );
}
export default Sort;