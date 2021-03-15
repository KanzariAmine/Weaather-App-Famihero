import { Container, Label, Input, ErrorMessage } from "./InputText.styled";

const InputText = (props) => {
  const {
    title,
    placeholder,
    value,
    onChange,
    name,
    type,
    errors,
    ...rest
  } = props;
  return (
    <Container {...rest}>
      <Label>{title}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {errors && <ErrorMessage>{errors}</ErrorMessage>}
    </Container>
  );
};

export default InputText;
