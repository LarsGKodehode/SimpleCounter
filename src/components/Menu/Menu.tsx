// Libraries
import {
  ReactElement,
  ReactEventHandler
} from "react";

// Components
import CustomButton from "../CustomButton/CustomButton";

// We handle simple compositions inside here
interface MenuProps {
  handleDecrement: CallableFunction,
  handleIncrement: CallableFunction,
  handleReset: CallableFunction,
};

function Menu(props: MenuProps): ReactElement {
  // Get what we want from props
  const {
    handleDecrement,
    handleIncrement,
    handleReset,
  } = props;

  // Menu style
  const style: React.CSSProperties = {
    display: 'grid',
    gridTemplateAreas: `
      'decrement increment'
      'reset reset'
    `,
  };

  // Props
  const decrementProps = {
    handleClick: handleDecrement,
    text: 'decrement',
    styling: {
      gridArea: 'decrement',
      backgroundColor: 'red',
    },
  };
  const incrementProps = {
    handleClick: handleIncrement,
    text: 'increment',
    styling: {
      gridArea: 'increment',
      backgroundColor: 'green',
    },
  };
  const resetProps = {
    handleClick: handleReset,
    text: 'reset',
    styling: {
      gridArea: 'reset',
      backgroundColor: 'gray',
    },
  };

  // Component
  return(  
    <div
      style={style}
    >
      <CustomButton {...decrementProps}/>
      <CustomButton {...incrementProps} />
      <CustomButton {...resetProps} />
    </div>
  );
};

export default Menu;

export type {
  MenuProps,
};