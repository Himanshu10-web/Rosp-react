import AccordionItem, { TCelebrity } from './AccordionItem';

const Accordion = ({ celebs }: { celebs: TCelebrity[] }) => {
	return (
		<div className='flex flex-col gap-4'>
			{celebs?.map((celeb) => (
				<AccordionItem celeb={celeb} key={celeb.id} />
			))}
		</div>
	);
};

export default Accordion;
