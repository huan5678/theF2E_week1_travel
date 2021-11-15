import React from "react";
import arrowRight from "../images/arrow-right16_R.svg";
import { Link } from "react-router-dom";

export function IndexTitle(props) {
  const prop = props.props
  return (
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-2xl">{prop.title}</h2>
      <div>
        <Link to={prop.target} className="text-secondary flex items-center">
          <span>查看更多{prop.title.substr(prop.title.length - 2)}</span>
          <img className="pl-2" src={arrowRight} alt="arrowRight" />
        </Link>
      </div>
    </div>
  );
}
