import type {ViewProps} from 'react-native';
import {View as RNView} from 'react-native';

import {styled} from 'nativewind';

interface ViewInterface extends ViewProps {
	className?: string | number | true | symbol | undefined;
}

const View: React.FC<ViewInterface> = props => {
	const {children, ...rest} = props;
	return <RNView {...rest}>{children}</RNView>;
};

export default styled(View, {
	props: {
		className: true,
	},
});
