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

interface VariableStyling {
  /**
   * Custimze a named area to display button in
   */
  gridArea: string,
  /**
   * Color of button, defaults to parent background color
   */
  backgroundColor?: string,
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
  handleClick: CallableFunction;
  /**
   * Optional styling, only used to palce in grid at the moment
   */
   styling: VariableStyling;
};

function CustomButton(props: CustomButtonProps): ReactElement {
  // Get the stuff we want
  const {
    handleClick,
    text,
    styling,
  } = props;

  // Construct style
  // destructure from style prop
  const {
    gridArea,
    backgroundColor,
  } = styling;

  const style: React.CSSProperties = {
    gridArea: gridArea,
    margin: '2em',
    padding: '.5em',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: backgroundColor ? backgroundColor : 'inherit',
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