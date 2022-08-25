// Libraries
import {
  ReactElement,
} from "react";


// Interface
interface OutputProps {
  count: number;
};

// Component
function Output(props: OutputProps): ReactElement {
  // Get stuff from props
  const {
    count,
  } = props;

  const style: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
  };

  return(
    <div
      style={style}
    >
      {count}
    </div>
  );
};

export default Output;