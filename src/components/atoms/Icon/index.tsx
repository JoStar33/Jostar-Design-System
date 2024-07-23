import React from 'react';
import styled from 'styled-components';
import * as svg from '@/assets/icons';
import { colors } from '@/styles/Theme';

export type IconType = keyof typeof svg;

export type Props = {
  name: IconType;
  className?: string;
  style?: React.CSSProperties | undefined;
  width?: string;
  height?: string;
  margin?: string;
  onClick?: any;
  cursor?: string;
  color?: keyof typeof colors;
};

function Icon({ name, className, style, onClick, color }: Props) {
  return React.createElement(svg[name], {
    className,
    style,
    onClick,
    fill: color ? colors[color] : 'currentColor',
  });
}

export default styled(Icon)`
  width: ${(props) => (props.width ? props.width : '24px')};
  height: ${(props) => (props.height ? props.height : '24px')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
`;
