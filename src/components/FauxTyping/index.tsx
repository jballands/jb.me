import React, { RefObject } from 'react';
import styled, { keyframes } from 'styled-components';
import { Box, Text } from '../SS';
import useTyping from './useTyping';

const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const Cursor = styled(Text)`
	display: inline-block;
	animation: 1s ${blink} step-end infinite;
`;

interface FauxTypingProps {
	strings: string[];
	speed?: number;
	pause?: number;
}

function FauxTyping({ strings, speed, pause }: FauxTypingProps) {
	const ref: RefObject<HTMLElement> = useTyping(strings, speed, pause);
	return (
		<>
			<Text ref={ref} />
			<Cursor color="white">|</Cursor>
		</>
	);
}

export default FauxTyping;
