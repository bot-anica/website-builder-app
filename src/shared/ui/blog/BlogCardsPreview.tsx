import BlogCard from './blogCard/BlogCard';

const hoverEffectVariants = ['default', 'withIcon', 'withoutIcon'] as const;
const cardVariants = ['withBorder', 'withoutBorder'] as const;

interface CardProps {
  cardVariant: (typeof cardVariants)[number];
  hoverEffectVariant: (typeof hoverEffectVariants)[number];
}

const allBlogCards: Record<(typeof cardVariants)[number], CardProps[]> = {
  withoutBorder: [],
  withBorder: [],
};

cardVariants.forEach(cardVariant => {
  hoverEffectVariants.forEach(hoverEffectVariant => {
    allBlogCards[cardVariant].push({ cardVariant, hoverEffectVariant });
  });
});

const sampleImage =
  'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';

export default function BlogCardsPreview() {
  return (
    <div>
      {Object.entries(allBlogCards).map(([cardVariant, data]) => (
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
                <BlogCard
                  image={sampleImage}
                  title="The Art of Modern Web Development"
                  author="John Doe"
                  date="Feb 15, 2024"
                  preview="Exploring the latest trends and best practices in modern web development, from responsive design to progressive enhancement."
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
