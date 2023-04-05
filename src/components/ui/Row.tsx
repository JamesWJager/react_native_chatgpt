import {View, ViewProps} from 'react-native';

import {clsx} from 'clsx';
import {styled} from 'nativewind';

interface RowInterface extends ViewProps {
	center?: boolean;
	full?: boolean;
}

const Row: React.FC<RowInterface> = ({children, ...props}) => {
	const {center = false, full = false} = props;
	const stylesCenter = center ? 'justify-center items-center' : '';
	const stylesWidth = full ? 'w-full' : '';

	const className = clsx('flex flex-row', stylesCenter, stylesWidth);
	return (
		<View {...props} className={className}>
			{children}
		</View>
	);
};

export default styled(Row, {
	props: {
		className: true,
	},
});
