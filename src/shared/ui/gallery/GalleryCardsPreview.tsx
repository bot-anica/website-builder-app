import GalleryCard from './GalleryCard';

const hoverEffectVariants = ['default', 'withIcon', 'withoutIcon'] as const;
const cardVariants = [
  'wide',
  'withDate',
  'withDescription',
  'withBorder',
] as const;

interface CardProps {
  cardVariant: (typeof cardVariants)[number];
  hoverEffectVariant: (typeof hoverEffectVariants)[number];
}

const allGalaryCards: Record<(typeof cardVariants)[number], CardProps[]> = {
  wide: [],
  withDate: [],
  withDescription: [],
  withBorder: [],
};

cardVariants.forEach(cardVariant => {
  hoverEffectVariants.forEach(hoverEffectVariant => {
    allGalaryCards[cardVariant].push({ cardVariant, hoverEffectVariant });
  });
});

const sampleImage =
  'https://media.istockphoto.com/id/1435220822/fr/photo/d%C3%A9veloppeur-de-logiciels-afro-am%C3%A9ricain.jpg?s=612x612&w=0&k=20&c=oJ53Q-OtZz_dVxWTq0Pw_ROjyQ1-EWAhP8JeWbMVtfA=';

export default function GalleryCardsPreview() {
  return (
    <div>
      {Object.entries(allGalaryCards).map(([cardVariant, data]) => (
        <div key={cardVariant}>
          <h2>{cardVariant}</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 500px)',
              gap: '40px',
            }}
          >
            {data.map(properties => (
              <div
                key={`${properties.cardVariant}-${properties.hoverEffectVariant}`}
              >
                <GalleryCard
                  image={sampleImage}
                  title="Photo Description"
                  description={
                    cardVariant === 'withDescription'
                      ? 'Sub title text sentence to be filled in.'
                      : undefined
                  }
                  date={cardVariant === 'withDate' ? '12/01/2023' : undefined}
                  onClick={() => {}}
                  withBorder={cardVariant === 'withBorder'}
                  hoverEffectVariant={properties.hoverEffectVariant}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
