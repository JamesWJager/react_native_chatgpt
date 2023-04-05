import {ViewProps} from 'react-native/types';

import {clsx} from 'clsx';
import {styled} from 'nativewind';

import View from './View';

interface ColumnInterface extends ViewProps {
	center?: boolean;
	full?: boolean;
}

const Column: React.FC<ColumnInterface> = ({children, ...props}) => {
	const {center = false, full = false} = props;
	const stylesCenter = center ? 'justify-center items-center' : '';
	const stylesWidth = full ? 'w-full' : '';

	const className = clsx('flex flex-col', stylesCenter, stylesWidth);
	return (
		<View {...props} className={className}>
			{children}
		</View>
	);
};

export default styled(Column, {
	props: {
		className: true,
	},
});
