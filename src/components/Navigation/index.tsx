import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Flex } from '../SS';
import NavigationLink from './NavigationLink';

function NavigationBar() {
	return (
		<Flex
			as="nav"
			flexDirection="row"
			justifyContent="flex-end"
			width="100%"
			py={4}
		>
			<NavigationLink to="/">Hi</NavigationLink>
			<NavigationLink to="/about">About</NavigationLink>
			<NavigationLink external to="/resume_2025_website_safe.pdf">
				Resume
			</NavigationLink>
			<NavigationLink external to="https://github.com/jballands">
				Github
			</NavigationLink>
		</Flex>
	);
}

export default NavigationBar;
