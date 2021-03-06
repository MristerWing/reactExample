import React, { Component } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColor extends Component {
	static contextType = ColorContext;

	handleSetColor = color => {
		this.context.actions.setColor(color);
	};

	handelSetSubcolor = subcolor => {
		this.context.actions.setSubcolor(subcolor);
	};

	render() {
		return (
			<div>
				<h2>색상을 선택하세요.</h2>
				<div style={{ display: 'flex' }}>
					{colors.map(color => (
						<div
							key={color}
							style={{
								background: color,
								width: '24px',
								height: '24px',
								cursor: 'pointer'
							}}
							onClick={() => this.handleSetColor(color)}
							onContextMenu={e => {
								e.preventDefault(); //마우스 오른쪽 클릭시 메뉴가 드는 것을 무시함
								this.handelSetSubcolor(color);
							}}
						/>
					))}
				</div>
				<hr />
			</div>
		);
	}
}

export default SelectColor;
