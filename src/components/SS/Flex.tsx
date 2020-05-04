import React from 'react';
import styled from 'styled-components';
import * as ss from 'styled-system';
import Box, { BoxProps } from './Box';

interface FlexProps extends BoxProps, ss.FlexboxProps {}

const Flex = styled(Box)<FlexProps>`
	display: flex;
	${ss.flexbox}
`;

export default Flex;
