import React, { ReactNode } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'normalize.css';
import theme from '../theme';
import Navigation from './Navigation';
import { Box, Flex } from './SS';

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
`;

interface LayoutProps {
	children: ReactNode;
}

function Layout({ children }: LayoutProps) {
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Flex
					flexDirection="column"
					justifyContent="center"
					minHeight="100vh"
					m="auto"
					width={['87.5%', '724px', '980px']}
				>
					<GlobalStyles />
					<Navigation />
					<Flex position="relative" flexGrow={1}>
						<Box
							position="absolute"
							left={0}
							top={0}
							width="100%"
							height="100%"
						>
							{children}
						</Box>
					</Flex>
				</Flex>
			</Box>
		</ThemeProvider>
	);
}

export default Layout;
