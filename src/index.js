import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types"

import bebounce from './debounce';

/**
 * Default breakpoint
 * @type {Number}
 */
const WINDOW_BREAKPOINT = 768;

/**
 * Pass viewport info to Child component
 * Update on resize evet
 * @param  {Component} Child 
 * @return {Component}
 */
export default (Child) => {

	/**
	 * Returned component
	 * @param {Number} breakpoint Mobile Breakpoint, default to 768
	 */
	function Component(props) {
		const [ screenState, setScreenState ] = useState({
			device: 'mobile', 
			docWidth: 320, 
			docHeight: 480
		});

		useEffect(() => {
			/**
			 * Update window info on resize
			 */
			const onWindowResize = debounce(() => {
				const docWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
				const docHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
				const device = window.innerWidth > props.breakpoint ? 'desktop' : 'mobile'
				
				setScreenState({device, docWidth, docHeight});
			});
			
			onWindowResize();
			window.addEventListener('resize', onWindowResize);
			return () => {
				window.removeEventListener('resize', onWindowResize);
			}
		}, [screenState.device]);

		return <Child { ...props } screenState = { screenState } />
	}

	Component.defaultProps = {
		breakpoint: WINDOW_BREAKPOINT
	}

	Component.propTypes = {
		breakpoint: PropTypes.number
	}

	return Component;
}