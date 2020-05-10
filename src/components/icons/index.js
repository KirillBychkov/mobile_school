// @flow

import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import close from './close.svg';

const Icons = {
	close
};

type IProps = {
	icon: any,
	width?: ?number,
	height?: ?number,
	style?: Object,
	onLayout?: Function,
	calculatedWidth?: any,
	calculatedHeight?: any,
};

export const Icon = ({
	icon: SelectedIcon,
	width,
	height,
	style,
	calculatedWidth,
	calculatedHeight,
	onLayout,
	...props
}: IProps) => {
	let svgWidth;
	let svgHeight;

	if (width && height) {
		const size = { width, height }; // calculateSize(

		svgWidth = size.width;
		svgHeight = size.height;
	}

	return (
		<View style={style} onLayout={onLayout}>
			<SelectedIcon width={calculatedWidth || svgWidth} height={calculatedHeight || svgHeight} {...props} />
		</View>
	);
};

Icon.defaultProps = {
	style: {},
	width: null,
	height: null,
	onLayout: null,
	calculatedWidth: null,
	calculatedHeight: null,
};

Icon.icons = Icons;

type IPressableIcon = {
	onPress?: Function,
	activeOpacity?: number,
	children: React.Node,
};

const styles = StyleSheet.create({
	touchable: {
		minHeight: 24,
		minWidth: 45,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});

export const PressableIcon = (props: IPressableIcon): React.Node => {
	const { onPress, children, activeOpacity, ...params } = props;

	return (
		<TouchableOpacity
			style={styles.touchable}
			onPress={onPress}
			{...props}
			activeOpacity={onPress ? activeOpacity : 1}
			{...params}
		>
			{children}
		</TouchableOpacity>
	);
};

PressableIcon.defaultProps = {
	onPress: null,
	activeOpacity: 0.6,
};
