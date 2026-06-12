export default function FieldError({ validObj }) {
    return validObj?.isInvalid === true && <div className="fld-error">{validObj?.message}</div>;
}
