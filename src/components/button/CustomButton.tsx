// Libraries
import {
  ReactElement,
  ReactEventHandler
} from "react";

interface IconProp {
  /**
   * Path to SVG
   */
  path: string;
  /**
   * where do you want the icon to display
   */
  position:
  'centre'|
  'top'|
  'right'|
  'bottom'|
  'left';
};

interface CustomButtonProps {
  /**
   * Text to display inside button
   */
  text?: string;
  /**
   * SVG props
   */
  icon?: IconProp;
  /**
   * Handler for onClick
   */
  handleClick: ReactEventHandler;
  /**
   * Optional styling, only used to palce in grid at the moment
   */
   gridArea: string;
};

function CustomButton(props: CustomButtonProps): ReactElement {
  // Get the stuff we want
  const {
    handleClick,
    text,
    gridArea,
  } = props;

  // Construct style
  const style: React.CSSProperties = {
    minWidth: '100px',
    minHeight: '100px',
    backgroundColor: 'white',
    margin: '2em',
    gridArea: gridArea,
  };

  return(
    <div
     onClick={(event) => handleClick(event)}
     style={style}
    >
      {text}
    </div>
  );
};

export default CustomButton;