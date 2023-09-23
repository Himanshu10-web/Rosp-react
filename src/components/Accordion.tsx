import { useState } from 'react';

import AccordionItem, { TCelebrity } from './AccordionItem';

const Accordion = ({ celebs }: { celebs: TCelebrity[] }) => {
	const [selected, setSelected] = useState<number | undefined>(1);
	const [isEditing, setIsEditing] = useState(false);

	const accordionToggle = (id: number) => {
		if (id === selected) setSelected(undefined);
		else setSelected(id);
	};

	return (
		<div className='flex flex-col gap-4'>
			{celebs?.map((celeb) => (
				<AccordionItem
					accordionToggle={accordionToggle}
					celeb={celeb}
					selected={selected}
					key={celeb.id}
					isEditing={isEditing}
					setIsEditing={setIsEditing}
				/>
			))}
		</div>
	);
};

export default Accordion;
