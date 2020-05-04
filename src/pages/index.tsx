import React from 'react';
import styled from 'styled-components';
import { Flex, Text } from '../components/SS';
import Layout from '../components/Layout';
import FauxTyping from '../components/FauxTyping';

const Title = styled.div`
	color: #ffc31f;
`;

function IndexPage() {
	return (
		<Layout>
			<Flex height="100%" alignItems="center" justifyContent="flex-start">
				<Text fontSize={5}>
					<Text color="white">&lt;</Text>
					<Text color="teal">Developer</Text>
					<Text color="orange">&nbsp;type=</Text>
					<Text color="green">
						"<FauxTyping strings={['React', 'Frontend']} speed={100} />"
					</Text>
					<Text color="white">&gt;</Text>
					<br />

					<Text color="blue">&nbsp;&nbsp;&nbsp;&nbsp;Jon Ballands</Text>
					<br />
					<Text color="white">&lt;/</Text>
					<Text color="teal">Developer</Text>
					<Text color="white">&gt;</Text>
					<br />
					<br />
					<Text color="white">&lt;</Text>
					<Text color="blue">button</Text>
					<Text color="white">&gt;</Text>
					<br />
					<Text color="blue">&nbsp;&nbsp;&nbsp;&nbsp;View Resume</Text>
					<br />
					<Text color="white">&lt;/</Text>
					<Text color="blue">button</Text>
					<Text color="white">&gt;</Text>
				</Text>
			</Flex>
		</Layout>
	);
}

export default IndexPage;
