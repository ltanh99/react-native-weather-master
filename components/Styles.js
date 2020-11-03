import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #5C83B2;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const Scroll = styled.ScrollView`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const CurrentDay = styled.View`
  position: relative;
  flex: 1;
  margin-top: 35px;
  align-items: center;
`;

export const City = styled.Text`
  font-size: 30px;
  font-weight: 400;
  color: white;
  padding-bottom: 5px;
`;
export const BigText = styled.Text`
  font-size: 35px;
  font-weight: 100;
  color: white;
  padding-bottom: 10px;
`;

export const DayFormat = styled.Text`
  font-size: 18px;
  font-weight: 200;
  color: white;
  padding-bottom: 20px;
`; 

export const BigIcon = styled.Image`
  width: 100px;
  height: 100px;
  padding-bottom: 40px;
`;

export const TinyIcon = styled.Image`
  width: 15px;
  height: 15px;
  padding-bottom: 0px;
  margin-right: 4px;
  margin-top: 2px;
  margin-left: -9px;
`;

export const Temp = styled.Text`
  font-size: 80px;
  height: 100px;
  font-weight: 100;
  color: #bae8e8;
  padding-left: 20px;
  margin-bottom: 18px;
`;
export const Description = styled.Text`
  font-size: 20px;
  font-weight: 100;
  color: #bae8e8;
  padding-top: 7px;
  padding-bottom: 5px;
`;

export const Hour = styled.ScrollView`
  width: 100%;
  height: 160px;
  background: #7494BE;
  border-radius: 15px;
`;

export const Week = styled.ScrollView`
  width: 100%;
  height: 160px;
  background: #7494BE;
  border-radius: 15px;
`;

export const Day = styled.View`
  height: 150px;
  width: 20%;
  justify-content: center;
  align-items: center;
`;

export const SmallIcon = styled.Image`
  width: 50px;
  height: 50px;
`;
export const SmallText = styled.Text`
  font-size: 19px;
  font-weight: 300;
  color: white;
`;

export const Hozirontal = styled.View`
  height: 0;
  width: 60%;
  margin: 10px 10px 0 10px;
`;

export const CardHourTitle = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #bae8e8;
  padding-top: 10px;
  padding-bottom: 5px;
  text-align: center;
`;

export const CardWeekTitle = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #bae8e8;
  padding-top: 10px;
  padding-bottom: 5px;
  text-align: center;
  `;
  
  export const PositionButton = styled.Text`
  font-size: 20px;
  font-weight: 400;
  color: white;
  padding-bottom: 5px;
`;


