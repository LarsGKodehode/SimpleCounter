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
    alignSelf: 'center',
    width: '5em',
    textAlign: 'center',
    padding: '10em',
    borderRadius: '50%',
    backgroundColor: 'gray',
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