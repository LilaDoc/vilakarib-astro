import React from 'react';

export default function AroundCard(props) {
  return (
  <a href={props.link}>
    <div className="aroundCard">
      <div className="aroundCardImage">
        <div className="aroundImage">
          <img src={props.image} alt="About" />
        </div>
      </div>
      <div className="aroundCardContent">
          <div className="aroundCardTitle">
            <h4>{props.title}</h4>
          </div>
          <div className="aroundText">
            <p>
              {props.text}
            </p>
          </div>
          <div className="aroundDistance">
            <p>{props.distance}</p>
          </div>
      </div>
    </div>
  </a>
  )
}

