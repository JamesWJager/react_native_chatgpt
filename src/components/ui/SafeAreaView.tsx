import type {SafeAreaViewProps} from 'react-native-safe-area-context';
import {SafeAreaView as SafeView} from 'react-native-safe-area-context';

import {styled} from 'nativewind';

interface SafeAreaViewInterface extends SafeAreaViewProps {
	className?: string | number | true | symbol | undefined;
	edges?: ('bottom' | 'left' | 'right' | 'top')[];
}

const SafeAreaView: React.FC<SafeAreaViewInterface> = ({
	children,
	edges = ['bottom', 'top'],
	...props
}) => (
	<SafeView {...props} edges={edges}>
		{children}
	</SafeView>
);

export default styled(SafeAreaView, {
	props: {
		className: true,
	},
});
