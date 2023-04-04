import {ViewProps} from 'react-native/types';

import {clsx} from 'clsx';
import {styled} from 'nativewind';

import View from './View';

interface RowInterface extends ViewProps {
	center?: boolean;
	full?: boolean;
	className?: string | number | true | symbol | undefined;
}

const Row: React.FC<RowInterface> = ({children, ...props}) => {
	const {center = false, full = false} = props;
	const stylesCenter = center ? 'justify-center items-center' : '';
	const stylesWidth = full ? 'w-full' : '';

	const className = clsx(['flex', stylesCenter, stylesWidth]);
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
