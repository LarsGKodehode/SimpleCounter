// Libraries
import {
  ReactElement,
  ReactEventHandler
} from "react";
import CustomButton from "../button/CustomButton";

// We handle simple compositions inside here
interface MenuProps {
  handleDecrement: ReactEventHandler,
  handleIncrement: ReactEventHandler,
  handleReset: ReactEventHandler,
};

function Menu(props: MenuProps): ReactElement {
  // Get what we want from props
  const {
    handleDecrement,
    handleIncrement,
    handleReset,
  } = props;

  // Props
  const decrementProps = {
    text: 'decrement',
    handleClick: handleDecrement,
  };
  const incrementProps = {
    text: 'increment',
    handleClick: handleIncrement,
  };
  const resetProps = {
    text: 'reset',
    handleClick: handleReset,
  };
  // Component
  return(  
    <div>
      <CustomButton {...decrementProps} />
      <CustomButton {...incrementProps} />
      <CustomButton {...resetProps} />
    </div>
  );
};

export default Menu;

export type {
  MenuProps,
};