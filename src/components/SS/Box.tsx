import React from 'react';
import styled from 'styled-components';
import * as ss from 'styled-system';

export interface BoxProps
	extends ss.LayoutProps,
		ss.SpaceProps,
		ss.ColorProps,
		ss.PositionProps,
		ss.BorderProps {}

const Box = styled.div<BoxProps>`
	${ss.layout}
	${ss.space}
	${ss.color}
	${ss.position}
	${ss.border}
`;

export default Box;
