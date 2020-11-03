import React from "react";
import imageDictionary from "../utils/imageDictionary.js";
import { Day, SmallIcon, SmallText,TinyIcon } from "./Styles";
import { View } from 'react-native';

export default function Card({ name, icon, temp, hour }) {
  return (
    <Day>
      <SmallIcon source={icon} />
      <SmallText>{name}</SmallText>
      <SmallText>{temp}°</SmallText>
      <View style={{flex: 1, flexDirection: 'row',maxHeight: 36,alignItems: 'center'}}>
        <TinyIcon source={imageDictionary["drop"]}/>
        <SmallText>{hour}</SmallText>
      </View>
    </Day>
  );
}
