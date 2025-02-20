import NewsCard from './NewsCard';

const hoverEffectVariants = ['default', 'withIcon', 'withoutIcon'] as const;
const cardVariants = ['withBorder', 'withoutBorder'] as const;
const sizeVariants = ['small', 'medium', 'large', 'extraLarge'] as const;

interface CardProps {
  cardVariant: (typeof cardVariants)[number];
  hoverEffectVariant: (typeof hoverEffectVariants)[number];
  size: (typeof sizeVariants)[number];
}

const allNewsCards: Record<(typeof cardVariants)[number], CardProps[]> = {
  withoutBorder: [],
  withBorder: [],
};

cardVariants.forEach(cardVariant => {
  hoverEffectVariants.forEach(hoverEffectVariant => {
    sizeVariants.forEach(size => {
      allNewsCards[cardVariant].push({ cardVariant, hoverEffectVariant, size });
    });
  });
});

const sampleImage =
  'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';

const previewText =
  'Stay updated with the most recent developments in the tech industry, featuring groundbreaking innovations and market trends.';

export default function NewsCardsPreview() {
  return (
    <div>
      {Object.entries(allNewsCards).map(([cardVariant, data]) => (
        <div key={cardVariant}>
          <h2>{cardVariant}</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 400px)',
              gap: '40px',
            }}
          >
            {data.map(properties => (
              <div
                key={`${properties.cardVariant}-${properties.hoverEffectVariant}-${properties.size}`}
              >
                <NewsCard
                  image={sampleImage}
                  title="Breaking News: Latest Developments in Tech"
                  date="Feb 15, 2024"
                  preview={
                    properties.hoverEffectVariant !== 'withIcon'
                      ? previewText
                      : undefined
                  }
                  onClick={() => {}}
                  withBorder={cardVariant === 'withBorder'}
                  hoverEffectVariant={properties.hoverEffectVariant}
                  size={properties.size}
                  showReadMoreButton={true}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
