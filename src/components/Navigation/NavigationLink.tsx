import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import { Text } from '../SS';

interface NavigationLinkProps {
	to: string;
	children: string | ReactNode;
	external?: boolean;
}

const StyledLink = styled(Link)`
	text-decoration: none;
`;

const StyledA = styled.a`
	text-decoration: none;
`;

const StyledText = styled(Text)`
	text-decoration: none;
`;

function NavigationLink({ children, external, to }: NavigationLinkProps) {
	const location = useLocation();
	const { pathname } = location;

	const active = to === '/' ? pathname === '/' : pathname.indexOf(to) > -1;

	if (external) {
		return (
			<StyledA href={to}>
				<StyledText color={active ? 'yellow' : 'white'} px={[2, 3, 3]}>
					{children}
				</StyledText>
			</StyledA>
		);
	}

	return (
		<StyledLink to={to}>
			<StyledText color={active ? 'yellow' : 'white'} px={[2, 3, 3]}>
				{children}
			</StyledText>
		</StyledLink>
	);
}

export default NavigationLink;
