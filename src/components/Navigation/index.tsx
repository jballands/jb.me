import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import { Flex } from '../SS';
import NavigationLink from './NavigationLink';

function NavigationBar() {
	const location = useLocation();
	const { pathname } = location;

	return (
		<Flex
			as="nav"
			flexDirection="row"
			justifyContent="flex-end"
			width="100%"
			py={4}
		>
			<NavigationLink to="/" active={pathname === '/'}>
				Hi
			</NavigationLink>
			<NavigationLink to="/about" active={pathname === '/about'}>
				About
			</NavigationLink>
			<NavigationLink
				external
				to="/resume_2020_public_version_no_phone.pdf"
				active={pathname === '/resume'}
			>
				Resume
			</NavigationLink>
			<NavigationLink
				external
				to="https://github.com/jballands"
				active={pathname === '/resume'}
			>
				Github
			</NavigationLink>
		</Flex>
	);
}

export default NavigationBar;
