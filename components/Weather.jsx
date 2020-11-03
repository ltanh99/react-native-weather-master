import React from "react";
import { isSameDay, format } from "date-fns";
import { View,TouchableHighlight } from 'react-native';
import imageDictionary from "../utils/imageDictionary.js";
import Card from "./Card";
import CardDay from "./CardDay";
import {
    CurrentDay,
    City,
    BigIcon,
    Temp,
    Description,
    Week,
    DayFormat,
    Hozirontal,
    Hour,
    CardHourTitle,
    CardWeekTitle,
    Scroll
} from "./Styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

var uvDetail;
var listDay = [];

const Weather = ({ forecast: { name, list, timezone, uv, listD } }) => {
    const currentWeather = list.filter((day) => {
        const now = new Date().getTime() + Math.abs(timezone * 1000);
        const currentDate = new Date(day.dt * 1000);
        if (uv < 3) {
            uvDetail = 'Low';
        } else if (uv >=3 && uv < 6) {
            uvDetail = 'Moderate';
        } else if (uv >=6 && uv < 8) {
            uvDetail = 'High';
        } else if (uv >=8 && uv < 11) {
            uvDetail = 'Very High';
        } else if (uv >= 11) {
            uvDetail = 'Extreme';
        }
        return isSameDay(now, currentDate);
    });

    var listTmp = [];
    var count = 0;
    while(count < 8) {
        listTmp.push(list[count]);
        count++;
    }

    const daysByHour = listTmp.map((day) => {
        const dt = new Date(day.dt * 1000);
        return {
            date: dt,
            hour: dt.getHours()+ ':00',
            name: format(dt, "EEEE"),
            temp: Math.round(day.main.temp),
            icon:
                imageDictionary[day.weather[0].icon] || imageDictionary["02d"],
        };
    });

    const daysByDays = listD.map((day) => {
        const dt = new Date(day.dt * 1000);
        return {
            date: dt,
            hour: day.humidity + '%',
            name: format(dt, "EEEE"),
            temp: Math.round((day.temp.max+day.temp.min)/2 - 273.15),
            icon:
                imageDictionary[day.weather[0].icon] || imageDictionary["02d"],
        };
    });

    var count = 0;
    const _onPressButton = () => {
        alert('You tapped the button:' + count);
        count++;
    };
    
    
    return (
        currentWeather.length > 0 && (
                <Scroll>
                    <TouchableHighlight onPress={_onPressButton} style={{position: 'absolute', right: 10, top: 10, borderRadius: 30}}>
                        <View>
                            <FontAwesomeIcon icon={ faBars } style={{ color: '#fff', minWidth: 25, minHeight: 25,fontWeight: 200, padding: 5}}/>
                        </View>
                    </TouchableHighlight>

                    <CurrentDay>
                        <City>{name}</City>
                        <DayFormat>{new Date().toLocaleString()}</DayFormat>
                        <View style={{flex: 1, flexDirection: 'row',maxHeight: 110,alignItems: 'center'}}>
                            <BigIcon
                                source={
                                    imageDictionary[
                                        currentWeather[0].weather[0].icon
                                    ] || imageDictionary["02d"]
                                }
                            />
                            <Temp>{Math.round(currentWeather[0].main.temp)}°</Temp>
                        </View>
                        <Description>
                        {Math.round(currentWeather[0].main.temp_max)}° / {Math.round(currentWeather[0].main.temp_min)}°  |  Feel Like {Math.round(currentWeather[0].main.feels_like)}°
                        </Description>
                        <Description style={{textTransform: 'capitalize', fontWeight: '400'}}>
                            {currentWeather[0].weather[0].description}
                        </Description>

                        <Hozirontal style={{borderStyle: 'solid',borderTopWidth: 1, borderTopColor: '#fff'}}></Hozirontal>

                        <Description>
                            Humidity: {currentWeather[0].main.humidity}%
                        </Description>        
                        <Description>
                            UV Index: {uv} - {uvDetail}
                        </Description>
                        <Hozirontal style={{borderStyle: 'solid',borderTopWidth: 1, borderTopColor: '#fff'}}></Hozirontal>
                    </CurrentDay>
                    <CardHourTitle>By Hour</CardHourTitle>
                    <Hour horizontal={true} showsHorizontalScrollIndicator={false}>
                        {daysByHour.map((day, index) => (
                            <Card
                                key={index}
                                icon={day.icon}
                                name={day.name.substring(0, 3)}
                                temp={day.temp}
                                hour={day.hour}
                            />
                        ))}
                    </Hour>
                    <CardWeekTitle>By Day</CardWeekTitle>
                    <Week horizontal={true} showsHorizontalScrollIndicator={false}>
                        {daysByDays.map((day, index) => (
                            <CardDay
                                key={index}
                                icon={day.icon}
                                name={day.name.substring(0, 3)}
                                temp={day.temp}
                                hour={day.hour}
                            />
                        ))}
                    </Week>
                </Scroll>
        )
    );
};
export default Weather;
