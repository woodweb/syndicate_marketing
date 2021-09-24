import React, { FunctionComponent } from "react";
import { Text } from "./";
import { RenderType } from "./Text";
import styled from "styled-components";

type ButtonProps = { center?: boolean };
export const Button: FunctionComponent<ButtonProps> = ({
  children,
  center,
}) => {
  return (
    <StyledButton center={center}>
      <Text type={RenderType.Nav} style={styles.text}>
        {children}
      </Text>
    </StyledButton>
  );
};

const StyledButton = styled.div<{ center?: boolean }>`
  align-items: center;
  background-color: #40bf8e;
  padding: 10px;
  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px;
  align-self: ${({ center }) => (center ? "center" : "flex-start")};
  cursor: pointer;
`;
const styles = {
  button: {},
  text: {
    color: "#fff",
  },
};
