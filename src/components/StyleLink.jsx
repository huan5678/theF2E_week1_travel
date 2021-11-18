import React from "react";
import { Link } from "react-router-dom";

export function StyleLink({ ...props }) {
  const item = props.data;
  return (
    <div>
      <Link
        className={`relative hover:before:absolute hover:${item.color} hover:before:border-b hover:${item.border} hover:before:translate-y-1 hover:before:w-full hover:before:h-full hover:before:content-[''] hover:before:top-0 hover:before:left-0 transition-all duration-500`}
        to={item.href}
      >
        {item.title}
      </Link>
    </div>
  );
}
