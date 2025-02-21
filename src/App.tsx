import BlogCardsPreview from './shared/ui/blog/BlogCardsPreview.tsx';
import ButtonsPreview from './shared/ui/button/ButtonsPreview.tsx';
import FormFieldsPreview from './shared/ui/form/FormFieldsPreview.tsx';
import GalleryCardsPreview from './shared/ui/gallery/GalleryCardsPreview.tsx';
import NewsCardsPreview from './shared/ui/news/NewsCardsPreview.tsx';
import { AccordionSection } from './widgets/sections/ui/accordionSection/AccordionSection.tsx';

const accordionContent = [
  {
    title: 'What are the keys to good business?',
    content:
      'Success in business requires strategic planning, effective leadership, market understanding, and adaptable operations. Focus on customer needs, maintain quality, and build strong relationships.',
  },
  {
    title: 'How do I align my business strategy?',
    content:
      'Align your business strategy by defining clear goals, analyzing market conditions, identifying core competencies, and ensuring all departments work towards common objectives.',
  },
  {
    title: 'How to formulate a growth strategy?',
    content:
      'Develop a growth strategy by identifying market opportunities, analyzing competitors, investing in innovation, and creating scalable processes. Consider both organic growth and strategic partnerships.',
  },
  {
    title: 'How to measure effective metrics?',
    content:
      'Track key performance indicators (KPIs) relevant to your goals, monitor customer satisfaction, analyze financial metrics, and regularly review operational efficiency measures.',
  },
];

const title = 'Frequently Asked Questions';

const description =
  'We need to leverage our data to gain insights and make informed decisions. By analyzing our data, we can identify trends, patterns, and opportunities that can drive our business forward. We should invest in technology and tools that can help us make sense of our data and use it to make data-driven decisions.';

const text =
  'Performance management involves setting goals, measuring performance, and providing feedback to employees to align their efforts with organizational objectives. This includes regular performance reviews, setting performance targets, and tracking progress towards those targets.';

export default function App() {
  return (
    <div>
      <div className="w-full bg-light-grey grid gap-10">
        <AccordionSection
          title={title}
          variant="white"
          maxWidth="full"
          items={accordionContent}
          accordionTitleSize="large"
        />
        <AccordionSection
          title={title}
          variant="white"
          maxWidth="full"
          items={accordionContent}
          accordionTitleSize="large"
        />
        <AccordionSection
          title={title}
          description={description}
          textPartPosition="left"
          titleYPosition="middle"
          variant="white"
          maxWidth="extraSmall"
          items={accordionContent}
          accordionTitleSize="small"
        />
        <AccordionSection
          title={title}
          description={description}
          text={text}
          textPartPosition="left"
          titleYPosition="middle"
          variant="white"
          maxWidth="extraSmall"
          items={accordionContent}
          accordionTitleSize="small"
        />
        <AccordionSection
          description={description}
          descriptionSize="large"
          textPartPosition="left"
          titleYPosition="middle"
          variant="white"
          maxWidth="extraSmall"
          items={accordionContent}
          accordionTitleSize="medium"
        />
        <AccordionSection
          title={title}
          description={description}
          textPartPosition="left"
          titleYPosition="middle"
          variant="blue"
          maxWidth="small"
          items={accordionContent}
          accordionTitleSize="medium"
        />
        <AccordionSection
          title={title}
          titleXPosition="left"
          description={description}
          descriptionSize="large"
          variant="white"
          maxWidth="medium"
          items={accordionContent}
          accordionTitleSize="medium"
        />
        {/* <AccordionPreview />
      <NewsCardsPreview />
      <BlogCardsPreview />
      <GalleryCardsPreview />
      <FormFieldsPreview />
      <ButtonsPreview /> */}
      </div>
      <BlogCardsPreview />
      <ButtonsPreview />
      <FormFieldsPreview />
      <GalleryCardsPreview />
      <NewsCardsPreview />
    </div>
  );
}
