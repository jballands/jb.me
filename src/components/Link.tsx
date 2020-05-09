import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Text } from './SS';

const StyledLink = styled(GatsbyLink)`
	color: ${p => p.theme.colors.orange};
`;

const StyledA = styled.a`
	color: ${p => p.theme.colors.orange};
`;

interface LinkProps {
	children: ReactNode;
	to: string;
	external?: boolean;
	[_: string]: any;
}

function Link({ children, external, to, ...rest }: LinkProps) {
	if (external) {
		return (
			<StyledA href={to}>
				<Text {...rest}>{children}</Text>
			</StyledA>
		);
	}

	return (
		<StyledLink to={to}>
			<Text {...rest}>{children}</Text>
		</StyledLink>
	);
}

export default Link;
