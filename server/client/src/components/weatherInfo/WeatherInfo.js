import { Container, WeatherKey, WeatherValue } from "./WeatherInfo.styled";

const WeatherInfo = (props) => {
  const { value } = props;

  return (
    <Container>
      <WeatherKey>
        Location:
        <WeatherValue>
          {value.city}, {value?.country}
        </WeatherValue>
      </WeatherKey>
      <WeatherKey>
        Temperature:<WeatherValue>{value?.temperature}°F</WeatherValue>
      </WeatherKey>
      <WeatherKey>
        Humidity:<WeatherValue>{value?.humidity}</WeatherValue>
      </WeatherKey>
      <WeatherKey>
        Description:<WeatherValue>{value?.description}</WeatherValue>
      </WeatherKey>
    </Container>
  );
};

export default WeatherInfo;
