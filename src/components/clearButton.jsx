import React from 'react';
import style from '../css/clearButton.css';

export function ClearButton(props) {
	return (
		<div className='clear-button' onClick={props.manejarClear}>
		{props.children}
		</div>
	)
}