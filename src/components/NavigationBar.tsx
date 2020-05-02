import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	box-sizing: border-box;
	flex-flow: row;
	width: 100%;
	padding: 24px;
	justify-content: flex-end;
`;

function NavigationBar() {
	return <Container>Hello world</Container>;
}

export default NavigationBar;
