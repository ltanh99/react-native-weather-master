import React from "react";
import { Day, SmallIcon, SmallText } from "./Styles";

export default function Card({ name, icon, temp, hour }) {
  return (
    <Day>
      <SmallIcon source={icon} />
      <SmallText>{name}</SmallText>
      <SmallText>{temp}°</SmallText>
      <SmallText>{hour}</SmallText>
    </Day>
  );
}
