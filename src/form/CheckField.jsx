import FieldError from './FieldError';

export default function CheckField({ name, value, onChange, valid, children }) {
    return (
        <>
            <div className={`form-check terms-conditions`}>
                <input type="checkbox" className="form-check-input" checked={value === 'yes' ? true : false} onChange={onChange} name={name} id={name} />
                <label className="form-check-label" htmlFor={name}>
                    {children}
                </label>
            </div>
            <FieldError validObj={valid} />
        </>
    );
}
