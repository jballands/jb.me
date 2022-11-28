import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Text, Grid, Flex, Box } from './SS';
import Link from './Link';

const StyledBox = styled(Box)`
	&:not(:last-child) {
		border-bottom: 1px solid #555;
	}
`;

interface ChristmasItemProps {
	name: string;
	link: string;
	children?: ReactNode;
}

function ChristmasItem({ name, link, children }: ChristmasItemProps) {
	return (
		<StyledBox my={2} py={3} width="100%">
			<Link external to={link} style={{ textDecoration: 'none' }}>
				<Flex flexDirection="column">
					<Text color="pink" fontSize={4}>
						{name}
					</Text>
					<Text color="orange">Click to link to item</Text>
					<Box color="white" my={3}>
						{children}
					</Box>
				</Flex>
			</Link>
		</StyledBox>
	);
}

export default ChristmasItem;
