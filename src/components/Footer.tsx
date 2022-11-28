import React from 'react';
import { Flex, Text } from './SS';

function Footer() {
	return (
		<Flex py={4}>
			<Text>&copy; {new Date().getFullYear()} Jon Ballands</Text>
		</Flex>
	);
}

export default Footer;
