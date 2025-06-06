import React from "react";

export default function Alert(props) {

    const capitalized = (word)=> {
        let lower = word.charAt(0).toUpperCase() + word.slice(1);
        return lower;
    }


  return (
    <div style={{height: '50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalized(props.alert.type)}</strong> : {props.alert.msg}
    </div>}
    </div>
  );
}
