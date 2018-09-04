import React from 'react'

 const  Search = (props) => (
  <form onSubmit={props.onSubmit}>
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
    <button type="submit">
      {props.children}
    </button>
  </form>
 )
export default Search