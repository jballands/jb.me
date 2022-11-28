import React from 'react';
import styled from 'styled-components';
import * as ss from 'styled-system';

interface TextProps
	extends ss.SpaceProps,
		ss.LayoutProps,
		ss.ColorProps,
		ss.TypographyProps,
		ss.BorderProps {}

const Text = styled.span<TextProps>`
	${ss.space}
	${ss.layout}
	${ss.color}
	${ss.typography}
	${ss.border}
`;

export default Text;
