import React, { ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import NavigationBar from './NavigationBar';

const GlobalStyles = createGlobalStyle`
	body {
		font-family: 'FiraCode-Regular';
		background: #1a1a1a;
		color: #f7f7f7;
	}
`;

const Page = styled.div`
	display: flex;
	flex-flow: column nowrap;
	min-height: 100vh;
`;

const Content = styled.div`
	flex: 1 0 0;
`;

interface LayoutProps {
	children: ReactNode;
}

function Layout({ children }: LayoutProps) {
	return (
		<Page>
			<GlobalStyles />
			<NavigationBar />
			<Content>{children}</Content>
		</Page>
	);
}

export default Layout;
