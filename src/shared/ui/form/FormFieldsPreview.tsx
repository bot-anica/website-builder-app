import InputField from './inputField/InputField.tsx';
import TextareaField from './textareaField/TextareaField.tsx';
import SelectField from './selectField/SelectField.tsx';
import LittleSelectField from './littleSelectField/LittleSelectField.tsx';

const formFieldStatus = ['warning', 'error', 'success'];
const formFieldHasError = ['hasError', 'withoutError'];
const formFieldType = ['rounded', 'square'];
const formFieldFilled = [false, true];
const formFieldShowSubmitButton = [false, true];

interface FieldProps {
  status: (typeof formFieldStatus)[number];
  filled: boolean;
  showSubmitButton: boolean;
}

interface LittleSelectFieldProps {
  type: (typeof formFieldType)[number];
  filled: boolean;
  hasError: boolean;
}

const allInputFields: Record<(typeof formFieldStatus)[number], FieldProps[]> = {
  warning: [],
  error: [],
  success: [],
};

const allTextareaFields: Record<
  (typeof formFieldStatus)[number],
  FieldProps[]
> = {
  warning: [],
  error: [],
  success: [],
};

const allSelectFields: Record<(typeof formFieldStatus)[number], FieldProps[]> =
  {
    warning: [],
    error: [],
    success: [],
  };

const allLittleSelectFields: Record<
  (typeof formFieldType)[number],
  LittleSelectFieldProps[]
> = {
  rounded: [],
  square: [],
};

formFieldStatus.forEach(status =>
  formFieldFilled.forEach(filled =>
    formFieldShowSubmitButton.forEach(showSubmitButton =>
      allInputFields[status].push({ status, filled, showSubmitButton }),
    ),
  ),
);

formFieldStatus.forEach(status =>
  formFieldFilled.forEach(filled =>
    formFieldShowSubmitButton.forEach(showSubmitButton =>
      allTextareaFields[status].push({ status, filled, showSubmitButton }),
    ),
  ),
);

formFieldStatus.forEach(status =>
  formFieldFilled.forEach(filled =>
    allSelectFields[status].push({ status, filled, showSubmitButton: false }),
  ),
);

formFieldType.forEach(type =>
  formFieldHasError.forEach(hasError =>
    formFieldFilled.forEach(filled =>
      allLittleSelectFields[type].push({
        type,
        filled,
        hasError: hasError === 'hasError',
      }),
    ),
  ),
);

const someLongTextareaText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec urna consectetur, finibus nunc nec, ultricies nunc. Nullam nec urna consectetur, finibus nunc nec, ultricies nunc. Nullam nec urna consectetur, finibus nunc nec, ultricies nunc. Nullam nec urna consectetur, finibus nunc nec, ultricies nunc. Nullam nec urna consectetur, finibus nunc nec, ultricies nunc. Nullam nec urna consectetur, finibus nunc nec, ultricies nunc. Nullam nec urna consectetur, finibus nunc nec, ultricies nunc. Nullam nec urna consectetur, finibus nunc nec, ultricies nunc. Nullam nec urna consectetur, finibus nunc nec, ultricies nunc.`;

export default function FormFieldsPreview() {
  return (
    <div>
      {Object.entries(allInputFields).map(([status, data]) => (
        <div key={status}>
          <h2>{status}</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 400px)',
            }}
          >
            {data.map((properties, index) => (
              <div
                key={`${properties.filled}-${properties.showSubmitButton}-${properties.status}`}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <InputField
                  name={`${properties.filled}-${properties.showSubmitButton}-${properties.status}`}
                  key={index}
                  label="Label"
                  type="text"
                  value={properties.filled ? 'Some field text' : ''}
                  onChange={() => {}}
                  placeholder="Placeholder"
                  required
                  // disabled
                  showSubmitButton={properties.showSubmitButton}
                  handleSubmit={() => {}}
                  hint="Hint message"
                  status={
                    properties.status as
                      | 'default'
                      | 'warning'
                      | 'error'
                      | 'success'
                  }
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      {Object.entries(allTextareaFields).map(([status, data]) => (
        <div key={status}>
          <h2>{status}</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 400px)',
            }}
          >
            {data.map((properties, index) => (
              <div
                key={`${properties.filled}-${properties.showSubmitButton}-${properties.status}`}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <TextareaField
                  name={`${properties.filled}-${properties.status}`}
                  key={index}
                  label="Label"
                  value={properties.filled ? someLongTextareaText : ''}
                  onChange={() => {}}
                  rows={4}
                  placeholder="Placeholder"
                  // required
                  disabled
                  showSubmitButton={properties.showSubmitButton}
                  handleSubmit={() => {}}
                  hint="Hint message"
                  status={
                    properties.status as
                      | 'default'
                      | 'warning'
                      | 'error'
                      | 'success'
                  }
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      {Object.entries(allSelectFields).map(([status, data]) => (
        <div key={status}>
          <h2>Default</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 400px)',
            }}
          >
            {data.map(properties => (
              <div className="flex justify-center">
                <SelectField<Record<string, string>>
                  key={`${properties.filled}-${properties.status}`}
                  value={
                    properties.filled
                      ? { id: 'option_1', value: 'Option 1' }
                      : undefined
                  }
                  options={[
                    { id: 'option_1', value: 'Option 1' },
                    { id: 'option_2', value: 'Option 2' },
                  ]}
                  optionKey="value"
                  name={`${properties.filled}-${properties.status}`}
                  label="Label"
                  onSelect={() => {}}
                  placeholder="Placeholder"
                  required
                  // disabled
                  hint="Hint message"
                  status={properties.status as 'default' | 'error' | 'success'}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="bg-matt-black py-10">
        {Object.entries(allLittleSelectFields).map(([status, data]) => (
          <div key={status} className="mb-10">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 400px)',
              }}
            >
              {data.map(properties => (
                <div className="flex justify-center gap-4">
                  <LittleSelectField<Record<string, string>>
                    key={`${properties.type}-${properties.filled}-${properties.hasError}`}
                    type={properties.type as 'rounded' | 'square'}
                    value={
                      properties.filled
                        ? { id: 'option_1', value: 'Option 1' }
                        : undefined
                    }
                    options={[
                      { id: 'option_1', value: 'Option 1' },
                      { id: 'option_2', value: 'Option 2' },
                      { id: 'option_3', value: 'Option 3' },
                      { id: 'option_4', value: 'Option 4' },
                    ]}
                    optionKey="value"
                    name={`${properties.type}-${properties.filled}-${properties.hasError}`}
                    onSelect={() => {}}
                    placeholder="Placeholder"
                    // disabled
                    hasError={properties.hasError}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
