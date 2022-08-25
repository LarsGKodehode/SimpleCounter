// Libraries
import {
  ReactElement,
  ReactEventHandler
} from "react";

// Components
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
    text: 'decrement',
    handleClick: handleDecrement,
    gridArea: 'decrement',
  };
  const incrementProps = {
    text: 'increment',
    handleClick: handleIncrement,
    gridArea: 'increment',
  };
  const resetProps = {
    text: 'reset',
    handleClick: handleReset,
    gridArea: 'reset',
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