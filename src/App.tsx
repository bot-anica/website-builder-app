import BlogCardsPreview from './shared/ui/blog/BlogCardsPreview.tsx';
import ButtonsPreview from './shared/ui/button/ButtonsPreview.tsx';
import FormFieldsPreview from './shared/ui/form/FormFieldsPreview.tsx';
import GalleryCardsPreview from './shared/ui/gallery/GalleryCardsPreview.tsx';
import NewsCardsPreview from './shared/ui/news/NewsCardsPreview.tsx';

export default function App() {
  return (
    <div>
      <NewsCardsPreview />
      <BlogCardsPreview />
      <GalleryCardsPreview />
      <FormFieldsPreview />
      <ButtonsPreview />
    </div>
  );
}
