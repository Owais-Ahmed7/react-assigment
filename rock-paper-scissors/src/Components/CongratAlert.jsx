import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const CongratAlert = (props) => {
  const { children, runAlert } = props;
  const { width, height } = useWindowSize();
  console.log(runAlert);
  return (
    <React.Fragment>
      {runAlert && (
        <Confetti numberOfPieces={500} run={true} recycle={false} width={width} height={height} />
      )}
      {children}
    </React.Fragment>
  );
};

export default CongratAlert;
