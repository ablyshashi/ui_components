// import FieldError from './FieldError';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import MaskedTextInput from 'react-text-mask';
// import { isValidDate, showDate, stringToDate } from '../helper/common';

export default function DatePickerField() {
    return <DatePicker
        selected={new Date()}
    />;
}
