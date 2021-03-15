import { useState } from "react";
import { Container, Form } from "./Home.styled";
//Component
import InputText from "../../components/input/InputText";
import Button from "../../components/button/Button";
import WeatherInfo from "../../components/weatherInfo/WeatherInfo";
import Title from "../../components/title/Title";
const Home = (props) => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState({});
  const setHandleChange = (evt) => {
    evt.preventDefault();
    setCity(evt.target.value);
  };

  //Function to call back End and get data
  const getWeather = async () => {
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ cityName: city }),
    };
    try {
      const response = await fetch(
        "http://localhost:1919/api/v1/city",
        options
      );
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getWeather();
    setCity("");
  };

  return (
    <Container>
      <Title />
      <Form onSubmit={handleSubmit}>
        <InputText
          title="City Name"
          placeholder="Entre a city name"
          name="cityName"
          type="text"
          value={city}
          onChange={setHandleChange}
          style={{ padding: "10px 0" }}
        />

        <Button title="submit" style={{ marginTop: "20px" }} />
      </Form>
      {/* Check if the object is empty or not */}
      {!(
        result &&
        Object.keys(result).length === 0 &&
        result.constructor === Object
      ) && <WeatherInfo value={result} />}
    </Container>
  );
};

export default Home;
