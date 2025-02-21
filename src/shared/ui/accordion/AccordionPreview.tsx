import Accordion from './accordion/Accordion';
import AccordionGroup from './accordionGroup/AccordionGroup';

const titleSizes = ['small', 'medium', 'large'] as const;
const iconVariants = ['plus', 'arrow'] as const;
const titleWeights = ['default', 'bold'] as const;

interface AccordionVariant {
  titleSize: (typeof titleSizes)[number];
  iconVariant: (typeof iconVariants)[number];
  titleWeight: (typeof titleWeights)[number];
}

const allAccordionVariants: Record<string, AccordionVariant[]> = {
  'Title Sizes': titleSizes.map(size => ({
    titleSize: size,
    iconVariant: 'plus',
    titleWeight: 'default',
  })),
  'Icon Variants': iconVariants.map(variant => ({
    titleSize: 'medium',
    iconVariant: variant,
    titleWeight: 'default',
  })),
  'Title Weights': titleWeights.map(weight => ({
    titleSize: 'medium',
    iconVariant: 'plus',
    titleWeight: weight,
  })),
};

const accordionContent =
  'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.';

const AccordionPreview = () => {
  return (
    <div className="p-8 max-w-7xl">
      {Object.entries(allAccordionVariants).map(([groupName, variants]) => (
        <div key={groupName} className="mb-12">
          <h2 className="text-h3 text-matt-black font-bold mb-6">
            {groupName}
          </h2>
          {variants.map((variant, index) => (
            <AccordionGroup className="my-10">
              <Accordion
                key={`1. ${variant.titleSize}-${variant.iconVariant}-${variant.titleWeight}-${index}`}
                title={`1. ${groupName} - ${Object.values(variant).join(' | ')}`}
                titleSize={variant.titleSize}
                titleWeight={variant.titleWeight}
                content={accordionContent}
                iconVariant={variant.iconVariant}
                iconColor="blue"
                maxWidth="medium"
              />
              <Accordion
                key={`2. ${variant.titleSize}-${variant.iconVariant}-${variant.titleWeight}-${index}`}
                title={`2. ${groupName} - ${Object.values(variant).join(' | ')}`}
                titleSize={variant.titleSize}
                titleWeight={variant.titleWeight}
                content={accordionContent}
                iconVariant={variant.iconVariant}
                iconColor="blue"
                maxWidth="medium"
              />
              <Accordion
                key={`3. ${variant.titleSize}-${variant.iconVariant}-${variant.titleWeight}-${index}`}
                title={`3. ${groupName} - ${Object.values(variant).join(' | ')}`}
                titleSize={variant.titleSize}
                titleWeight={variant.titleWeight}
                content={accordionContent}
                iconVariant={variant.iconVariant}
                iconColor="blue"
                maxWidth="medium"
              />
              <Accordion
                key={`4. ${variant.titleSize}-${variant.iconVariant}-${variant.titleWeight}-${index}`}
                title={`4. ${groupName} - ${Object.values(variant).join(' | ')}`}
                titleSize={variant.titleSize}
                titleWeight={variant.titleWeight}
                content={accordionContent}
                iconVariant={variant.iconVariant}
                iconColor="blue"
                maxWidth="medium"
              />
            </AccordionGroup>
          ))}
        </div>
      ))}

      <div className="bg-matt-black p-10">
        <AccordionGroup className="my-10" withBackground>
          <Accordion
            key={`1. medium-plus-default`}
            title={`1. medium-plus-default`}
            titleSize={'medium'}
            titleWeight={'default'}
            content={accordionContent}
            iconVariant={'plus'}
            iconColor="blue"
            maxWidth="medium"
          />
          <Accordion
            key={`2. medium-plus-default`}
            title={`2. medium-plus-default`}
            titleSize={'medium'}
            titleWeight={'default'}
            content={accordionContent}
            iconVariant={'plus'}
            iconColor="blue"
            maxWidth="medium"
          />
          <Accordion
            key={`3. medium-plus-default`}
            title={`3. medium-plus-default`}
            titleSize={'medium'}
            titleWeight={'default'}
            content={accordionContent}
            iconVariant={'plus'}
            iconColor="blue"
            maxWidth="medium"
          />
          <Accordion
            key={`4. medium-plus-default`}
            title={`4. medium-plus-default`}
            titleSize={'medium'}
            titleWeight={'default'}
            content={accordionContent}
            iconVariant={'plus'}
            iconColor="blue"
            maxWidth="medium"
          />
        </AccordionGroup>
      </div>
    </div>
  );
};

export default AccordionPreview;
