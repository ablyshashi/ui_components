import FieldError from './FieldError';

export default function TextField({ name, title, value, onChange, valid, removeHeadWrapper, validType, infoText, addPrefixText, labelInfoComponent, pattern, subTitle, ...extra }) {
    const filterVal = (val) => {
        if (val && validType === 'number') {
            val = val.replace(/[^0-9]/g, '');
        } else if (validType === 'float') {
            val = val.replace(/[^0-9.]/g, '');
        } else if (validType === 'float2') {
            val = val.replace(/[^0-9.]/g, '').replace(/^(\d*\.?\d{0,2}).*$/, '$1');
        } else if (validType === 'regex' && pattern) {
            val = val.replace(pattern, '');
        }
        return val;
    };

    const content = (
        <>
            <label>
                {title}
                {labelInfoComponent}
            </label>
            {subTitle && <p className="fld-subtitle">{subTitle}</p>}
            <input
                type="text"
                className="form-control"
                name={name}
                value={value}
                onChange={(e) => {
                    if (!onChange) {
                        return;
                    }
                    e.target.value = filterVal(e.target.value);
                    onChange(e);
                }}
                onBlur={(e) => {
                    if (!onChange) {
                        return;
                    }
                    e.target.value = e.target.value.trim();
                    onChange(e);
                }}
                {...extra}
            />
            {addPrefixText && <span className="prefix-text">{addPrefixText}</span>}
            {infoText && <div className="fld-info">{infoText}</div>}
            <FieldError validObj={valid} />
        </>
    );

    if (removeHeadWrapper) {
        return content;
    }

    return <div className={`form-group ${addPrefixText ? 'form-group-prefix' : ''}`}>{content}</div>;
}
