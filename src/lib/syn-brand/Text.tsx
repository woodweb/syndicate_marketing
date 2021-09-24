import React from "react";

export enum RenderType {
  Body = "body",
  Heading = "heading",
  Nav = "nav",
  Tagline = "tagline",
}

type TextProps = {
  type?: RenderType;
  style?: React.CSSProperties;
};
export const Text: React.FC<TextProps> = ({
  children,
  type = RenderType.Body,
  style = {},
  ...rest
}) => {
  return (
    <div
      style={Object.assign({}, styles.baseStyle, styles[type], style)}
      {...rest}
    >
      {children}
    </div>
  );
};

const styles = {
  baseStyle: {
    fontFamily: "Raleway",
    color: "#333747",
  },
  body: {
    fontSize: 16,
    color: "#9a9a9a",
  },
  tagline: {
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: "600",
  },
  nav: {
    fontWeight: "600",
    fontSize: 14,
  },
  heading: {
    fontWeight: "700",
    fontSize: 48,
  },
};
