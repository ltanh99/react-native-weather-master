import React from "react";
import useWeather from "./utils/useWeather";
import Loading from "./components/Loading";
import Weather from "./components/Weather";
import Position from "./components/ListPosition";
import { Container } from "./components/Styles";

export default function App() {
  const weather = useWeather();
  return (
    <Container>
      {/* {!weather ? <Loading /> : <Weather forecast={weather} />} */}
      <Position></Position>
    </Container>
  );
}
