import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Center = styled.div`
	display: flex;
	flex-flow: column nowrap;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

const Title = styled.div`
	color: #ffc31f;
`;

function IndexPage() {
	return (
		<Layout>
			<Center>
				<Title>jonballands</Title>
			</Center>
		</Layout>
	);
}

export default IndexPage;
