import React from 'react';
import styled from 'styled-components';
import * as ss from 'styled-system';
import Box, { BoxProps } from './Box';

interface GridProps extends BoxProps, ss.GridProps {}

const Grid = styled(Box)<GridProps>`
	display: grid;
	${ss.grid}
`;

export default Grid;
