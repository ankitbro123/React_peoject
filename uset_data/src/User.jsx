import React from "react";

function User(props ) {
    return(
        <>
         
  <tbody className="table-info align-middle">
    <tr >
      <th>{props.grid}</th>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.password}</td>
      <td>{props.course}</td>
      <td>{props.city}</td>
      <td><img src={props.img} alt={"img"} style={{ width: "50px", height: "50px", borderRadius: "50%" }} /></td>
    </tr>
  </tbody>
        </>
    )
}

export default User;