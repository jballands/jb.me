import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Box, Flex, Text } from '../components/SS';
import Layout from '../components/Layout';
import FauxTyping from '../components/FauxTyping';

export function Head() {
	return <title>Hi</title>;
}

const Title = styled.div`
	color: #ffc31f;
`;

const ViewResume = styled.a`
	text-decoration: none;

	&:hover {
		cursor: pointer;
	}
`;

function IndexPage() {
	return (
		<Layout title="jonathanballands.me">
			<Flex height="100%" alignItems="center" justifyContent="flex-start">
				<Text fontSize={[2, 4, 5]}>
					<Text color="white">&lt;</Text>
					<Text color="teal">Developer</Text>
					<Text color="orange">&nbsp;does=</Text>
					<Text color="green">
						"
						<FauxTyping
							strings={[
								'React',
								'TypeScript',
								'Node',
								'D3',
								'Next.js',
								'Gatsby',
								'Docker',
								'GraphQL',
								'Frontend',
								'Full-stack',
								'Anything JS',
							]}
							speed={100}
							pause={1500}
						/>
						"
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
					<ViewResume href="/resume_2021_public_version_no_phone.pdf">
						<Text color="white">&lt;</Text>
						<Text color="blue">button</Text>
						<Text color="white">&gt;</Text>
						<br />
						<Text color="blue">&nbsp;&nbsp;&nbsp;&nbsp;View Resume</Text>
						<br />
						<Text color="white">&lt;/</Text>
						<Text color="blue">button</Text>
						<Text color="white">&gt;</Text>
					</ViewResume>
				</Text>
			</Flex>
		</Layout>
	);
}

export default IndexPage;
