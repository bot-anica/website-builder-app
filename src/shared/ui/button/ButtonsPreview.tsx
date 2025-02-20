import PlusIcon from '../../assets/icons/PlusIcon';
import IconButton from './IconButton';
import StandardButton from './StandardButton';

const buttonSizes = ['large', 'medium', 'small', 'extra-small'] as const;
const buttonVariants = ['primary', 'secondary', 'tertiary'] as const;
const buttonStates = ['default', 'inactive', 'destructive'] as const;

interface ButtonProps {
  size: (typeof buttonSizes)[number];
  variant: (typeof buttonVariants)[number];
  state: (typeof buttonStates)[number];
}

const defaultButtonsPropsBySize: Record<
  (typeof buttonSizes)[number],
  ButtonProps[]
> = {
  large: [],
  medium: [],
  small: [],
  'extra-small': [],
};

const allIconButtonsPropsBySize: Record<
  (typeof buttonSizes)[number],
  ButtonProps[]
> = defaultButtonsPropsBySize;
const allStandardButtonsPropsBySize: Record<
  (typeof buttonSizes)[number],
  ButtonProps[]
> = defaultButtonsPropsBySize;

buttonSizes.forEach(size => {
  buttonVariants.forEach(variant => {
    buttonStates.forEach(state => {
      allIconButtonsPropsBySize[size].push({ size, variant, state });
      allStandardButtonsPropsBySize[size].push({ size, variant, state });
    });
  });
});

export default function ButtonsPreview() {
  return (
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(4, 100px)' }}>
      {Object.entries(allIconButtonsPropsBySize).map(([size, buttonsProps]) => (
        <div key={size}>
          <h2>{size}</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(18, 180px)',
            }}
          >
            {buttonsProps.map((buttonProps, index) => (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton key={index} {...buttonProps} icon={PlusIcon} />
              </div>
            ))}
          </div>
        </div>
      ))}
      {Object.entries(allStandardButtonsPropsBySize).map(
        ([size, buttonsProps]) => (
          <div key={size}>
            <h2>{size}</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(18, 180px)',
              }}
            >
              {buttonsProps.map((buttonProps, index) => (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <StandardButton
                    key={index}
                    type="rounded-full"
                    icon={PlusIcon}
                    iconPosition="right"
                    {...buttonProps}
                  >
                    Button
                  </StandardButton>
                </div>
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
}
