import React from "react";
const Close = ({ color, width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    width={width}
    height={height}
    viewBox="0 0 26 26"
    className={className}
  >
    <path
      fill={color}
      d="M13,0.188C5.924,0.188,0.188,5.924,0.188,13S5.924,25.813,13,25.813S25.813,20.076,25.813,13  S20.076,0.188,13,0.188z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0L13,15.313L9.533,18.78  c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467L7.221,9.534  c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468  c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467  C19.033,16.725,19.033,17.138,18.78,17.394z"
    />
  </svg>
);

export default Close;
