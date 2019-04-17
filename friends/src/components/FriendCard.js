import React from 'react';

function FriendCard(props) {
    return(
<button className="card">
  <div className="row clearfix">
    <div className="left big">Employee ID: {props.friend.id}</div>
    <div className="right"><p><span className="big">L</span>ambda <span className="big">S</span>chool</p><p><span className="med no-space">M</span><span className="small no-space">ergers and </span><span className="med no-space">A</span><span className="small no-space">cquisitions</span></p></div>
  </div>
  <div className="row">
    <p><span className="big">{props.friend.name}</span> <span className="med">Age: {props.friend.age}  </span></p>
    <p><span className="big">Email: </span><span className="big">{props.friend.email}</span></p>
  </div>
  <div className="row">
    <p><span className="med">358 E</span><span className="small">xchange </span><span className="med">P</span><span className="small">lace </span><span className="med">N</span><span className="small">ew </span><span className="med">Y</span><span className="small">ork</span><span className="med"></span><span className="small"></span><span className="med">212 555 6390 T</span><span className="small"></span><span className="med"></span>
    </p>
  </div>
</button>
    )
    }
export default FriendCard;