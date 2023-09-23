import {
	Dispatch,
	ReactElement,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';

import { TCelebrity } from '../components/AccordionItem';

type TCelebDataContext = {
	celebData: TCelebrity[] | null;
	setCelebData: Dispatch<SetStateAction<TCelebrity[] | null>>;
	isEditing: boolean;
	setIsEditing: Dispatch<SetStateAction<boolean>>;
	selected: number | null;
	setSelected: Dispatch<SetStateAction<number | null>>;
	accordionToggle: (id: number, isEditing: boolean) => void;
};

export const CelebDataContext = createContext<TCelebDataContext | null>(null);

export function CelebDataContextProvider({
	children,
}: {
	children: ReactElement;
}) {
	const [celebData, setCelebData] = useState<TCelebrity[] | null>(null);
	const [selected, setSelected] = useState<number | null>(1);
	const [isEditing, setIsEditing] = useState(false);

	const accordionToggle = (id: number, isEditing: boolean) => {
		if (isEditing) return;
		if (id === selected) setSelected(null);
		else setSelected(id);
	};

	return (
		<CelebDataContext.Provider
			value={{
				celebData,
				setCelebData,
				isEditing,
				setIsEditing,
				selected,
				setSelected,
				accordionToggle,
			}}>
			{children}
		</CelebDataContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCelebState() {
	const context = useContext(CelebDataContext);
	if (!context) {
		throw new Error(
			'useCelebState must be used within the CelebDataContextProvider'
		);
	}
	return context;
}
