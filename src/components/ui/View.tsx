import type {ViewProps} from 'react-native';
import {View as RNView} from 'react-native';

import {styled} from 'nativewind';

const View: React.FC<ViewProps> = props => {
	const {children, ...rest} = props;
	return <RNView {...rest}>{children}</RNView>;
};

export default styled(View, {
	props: {
		className: true,
	},
});
