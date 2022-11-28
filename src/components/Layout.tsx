import React, { ReactNode } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'normalize.css';
import theme from '../theme';
import Navigation from './Navigation';
import Footer from './Footer';
import { Box, Flex } from './SS';

export function Head() {
	return (
		<>
			<meta charSet="utf-8" />
			<meta name="description" content="Personal website of Jon Ballands" />
		</>
	);
}

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'FiraCode-Regular';
		src: url("/fonts/FiraCode-Regular.woff") format("woff");
	}

	body {
		font-family: 'FiraCode-Regular';
		background: #1a1a1a;
		color: #f7f7f7;
	}

	p {
		margin: 28px 0;
	}
`;

interface LayoutProps {
	title: string;
	children: ReactNode;
}

function Layout({ title, children }: LayoutProps) {
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Flex
					flexDirection="column"
					justifyContent="center"
					minHeight="100vh"
					m="auto"
					width={['87.5%', '700px', '980px']}
				>
					<GlobalStyles />
					<Navigation />
					<Flex flexGrow={1}>
						<Box py={4} width="100%">
							{children}
						</Box>
					</Flex>
					<Footer />
				</Flex>
			</Box>
		</ThemeProvider>
	);
}

export default Layout;
