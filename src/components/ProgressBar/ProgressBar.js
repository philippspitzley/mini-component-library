/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    radius: 4,
    padding: 0,
    height: 8,
  },
  medium: {
    radius: 4,
    padding: 0,
    height: 12,
  },
  large: {
    radius: 8,
    padding: 4,
    height: 24,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  const endRadius = value === 100 ? 4 : 0;

  if (!styles) {
    throw new Error(`Size prop is unknown ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      style={{
        "--height": styles.height + "px",
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
    >
      <VisuallyHidden>{value}</VisuallyHidden>

      <Bar
        style={{ "--width": value + "%", "--endRadius": endRadius + "px" }}
      />
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: var(--endRadius);
  border-bottom-right-radius: var(--endRadius);
`;
