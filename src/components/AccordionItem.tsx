import { Dispatch } from 'react';

import EditForm from './EditForm';
import ShowCelebDetails from './ShowCelebDetails';

export type TCelebrity = {
	id: number;
	first: string;
	last: string;
	dob: string;
	gender: string;
	email: string;
	picture: string;
	country: string;
	description: string;
};

export type TCelebProps = {
	celeb: TCelebrity;
	accordionToggle: (id: number) => void;
	setIsEditing: Dispatch<React.SetStateAction<boolean>>;
};

type TAccordionItemProps = TCelebProps & {
	selected: number | undefined;
	isEditing: boolean;
};

const AccordionItem = ({
	celeb,
	selected,
	accordionToggle,
	isEditing,
	setIsEditing,
}: TAccordionItemProps) => {
	const isSelected = selected === celeb.id;
	if (isEditing && isSelected) return <EditForm celeb={celeb} />;
	return (
		<ShowCelebDetails
			accordionToggle={accordionToggle}
			celeb={celeb}
			isSelected={isSelected}
			setIsEditing={setIsEditing}
		/>
	);
};

export default AccordionItem;
