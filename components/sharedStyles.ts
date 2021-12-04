import styled from "@emotion/styled";
import { ReactElement } from "react";
import toBool from "../util/toBool";

const dark = toBool(process.env.NEXT_PUBLIC_DARK_MODE);
const chunky = toBool(process.env.NEXT_PUBLIC_CHUNKY_FONTS);

console.log({ dark, chunky });

interface ColorProps {
  dimmed?: boolean;
  normal?: boolean;
  bright?: boolean;
}

export const Colors = {
  default: dark ? "#ccc" : "#000",
  dimmed: dark ? "#666" : "#000",
  normal: dark ? "#999" : "#000",
  bright: dark ? "#fff" : "#000",
};

console.log(Colors);

interface SizeProps {
  xsmall?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  xlarge?: boolean;
}

export const FontSize = {
  xsmall: "15px",
  small: "20px",
  medium: "30px",
  large: "65px",
  xlarge: "75px",
};

export const LineHeight = {
  xsmall: "20px",
  small: "25px",
  medium: "35px",
  large: "65px",
  xlarge: "75px",
};

interface WeightProps {
  thin?: boolean;
  light?: boolean;
  regular?: boolean;
  bold?: boolean;
}

export const Weight = {
  thin: chunky ? 400 : 100,
  light: chunky ? 400 : 300,
  regular: 400,
  bold: 700,
};

export const Header = styled("div")`
  text-transform: uppercase;
  font-size: ${FontSize.xsmall};
  font-family: "Rajdhani", "Roboto Condensed", Arial, Helvetica, sans-serif;
  font-weight: 400;
  border-bottom: 1px solid ${Colors.dimmed};
  line-height: 15px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  color: ${Colors.normal};
`;

const matchProps = (props = {}, opts = {}): string => {
  const k = Object.keys(props).find((p) => opts.hasOwnProperty(p));
  return k ? opts[k] : "";
};

export const Span = styled("span")<ColorProps & WeightProps & SizeProps>`
  font-family: "Rajdhani", sans-serif;
  color: ${(props) => matchProps(props, Colors)};
  fill: ${(props) => matchProps(props, Colors)};
  font-size: ${(props) => matchProps(props, FontSize)};
  line-height: ${(props) => matchProps(props, LineHeight)};
  font-weight: ${(props) => matchProps(props, Weight)};
`;

export const Div = styled("div")<ColorProps & WeightProps & SizeProps>`
  font-family: "Rajdhani", sans-serif;
  color: ${(props) => matchProps(props, Colors)};
  fill: ${(props) => matchProps(props, Colors)};
  font-size: ${(props) => matchProps(props, FontSize)};
  line-height: ${(props) => matchProps(props, LineHeight)};
  font-weight: ${(props) => matchProps(props, Weight)};
`;

interface SupProps {
  width?: number;
}

export const Sup = styled("sup")<SupProps & ColorProps>`
  font-family: "Rajdhani", sans-serif;
  color: ${(props) => matchProps(props, Colors)};
  width: ${({ width }) => (width ? width : "")};
  font-size: 50%;
  line-height: 50%;
`;

export const Module = styled(Div)`
  padding-bottom: 20px;
`;

export const Layer = styled(Div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
`;

interface GridProps {
  cols?: string;
  gap?: number | string;
  children?: ReactElement[];
}

export const Grid = styled("div")<GridProps>`
  display: grid;
  grid-template-columns: ${({ cols }) => (cols ? cols : "auto 1fr 1fr")};
  column-gap: ${({ gap }) => (gap ? gap : "1em")};
`;

export const R = styled(Div)`
  text-align: right;
`;

export const Stack = styled(Div)`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
`;

export const FlexDiv = styled(Div)`
  display: flex;
`;
