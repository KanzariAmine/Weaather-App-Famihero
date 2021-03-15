import { Button } from "./Button.styled";
const MyButton = (props) => {
  const { title, onClick, ...rest } = props;
  return (
    <Button onClick={onClick} {...rest}>
      {title}
    </Button>
  );
};

export default MyButton;
