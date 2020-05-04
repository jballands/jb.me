import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Text } from '../SS';

interface NavigationLinkProps {
	to: string;
	active: boolean;
	children: string | ReactNode;
}

const StyledLink = styled(Link)`
	text-decoration: none;
`;

const StyledText = styled(Text)`
	text-decoration: none;
`;

function NavigationLink({ children, active, to }: NavigationLinkProps) {
	return (
		<StyledLink to={to}>
			<StyledText color={active ? 'yellow' : 'white'} px={3}>
				{children}
			</StyledText>
		</StyledLink>
	);
}

export default NavigationLink;
