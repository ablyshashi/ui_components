import Select from 'react-select';
import FieldError from '../form/FieldError';

function FSelect({ customClass, placeholder, onChange, type, options, value, valid, disabled = false, subTitle, labelInfoComponent }) {
    let val = value ?? '';
    let defaultValue = options.find((v) => v.label === val || v.value === val);

    return (
        <div className="form-group">
            <label>{placeholder}{labelInfoComponent}</label>
            {subTitle && <p className="fld-subtitle">{subTitle}</p>}
            <Select
                key={defaultValue}
                isClearable={false}
                isSearchable={false}
                placeholder={placeholder}
                defaultValue={defaultValue}
                value={defaultValue}
                components={{
                    DropdownIndicator: null,
                }}
                isOptionDisabled={(option) => option.disabled}
                onChange={(e) => {
                    let event = { target: { value: e.value, name: type } };
                    onChange(event, type);
                }}
                className={`basic-single ${customClass ?? ''}`}
                classNamePrefix="select"
                options={options}
                isDisabled={disabled}
            />
            <FieldError validObj={valid} />
        </div>
    );
}

export default FSelect; // React.memo(FSelect);
