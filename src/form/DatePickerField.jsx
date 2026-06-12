import FieldError from './FieldError';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MaskedTextInput from 'react-text-mask';
import { isValidDate, showDate, stringToDate } from '../helper/common';

export default function DatePickerField({ name, title, value, onChange, valid, minDate, filterDate, maxDate, showYearDropdown = true, showMonthDropdown = true, type = 1, disabled = false }) {
    const content = (
        <DatePicker
            selected={value.replace('_', '').length === 10 && isValidDate(value) ? stringToDate(value, 'dd/MM/yyyy', '/') : null}
            minDate={minDate}
            maxDate={maxDate}
            filterDate={filterDate}
            disabled={disabled}
            onChange={(time) => {
                let e = {};
                e['target'] = {};
                e['target']['value'] = showDate(time);
                e['target']['name'] = name;
                onChange(e);
            }}
            onChangeRaw={(t) => {
                if (t.type !== 'change' || !filterDate) {
                    return;
                }

                const time = t.target.value;
                // ignore incomplete masked value
                if (time.includes("_")) {
                    return;
                }
                let e = {
                    target: {
                        name,
                        value: '',
                    },
                };
                const isDate = isValidDate(time);
                if (isDate) {
                    // const [d, m, y] = time.split('/');
                    // const dateObj = new Date(y, m - 1, d);
                    e.target.value = time;
                }
                onChange(e);
            }}
            autoComplete="off"
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
            portalId="root"
            showMonthDropdown={showMonthDropdown}
            showYearDropdown={showYearDropdown}
            dropdownMode="select"
            popperClassName="some-custom-class"
            popperPlacement="top-start"
            customInput={
                <MaskedTextInput
                    onBlur={(e) => {
                        let a = {};
                        a['target'] = {};
                        a['target']['value'] = e.target.value;
                        a['target']['name'] = name;
                        onChange(a);
                    }}
                    onChange={(e) => {
                        let a = {};
                        a['target'] = {};
                        a['target']['value'] = e.target.value;
                        a['target']['name'] = name;
                        onChange(a);
                    }}
                    type="text"
                    value={value}
                    className={`datepickerClass ${type == 3 || type == 1 ? 'form-control' : ''}`}
                    mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                />
            }
        />
    );

    if (type == 4) {
        return content;
    }

    const svgContent = (
        <div className={`form-calendar__icon`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="190.711 13.089 22.45 22.054">
                <path id="Path_217" data-name="Path 217" d="M 209.749 35.143 L 194.124 35.143 C 192.24 35.14 190.714 33.614 190.711 31.731 L 190.711 18.116 C 190.714 16.232 192.241 14.707 194.124 14.705 L 209.749 14.705 C 211.632 14.707 213.158 16.233 213.161 18.116 L 213.161 31.731 C 213.158 33.614 211.631 35.139 209.748 35.142 M 194.124 16.408 C 193.18 16.406 192.413 17.171 192.411 18.116 L 192.411 31.731 C 192.413 32.674 193.178 33.438 194.121 33.439 L 209.749 33.439 C 210.692 33.438 211.457 32.674 211.459 31.731 L 211.459 18.116 C 211.457 17.172 210.692 16.408 209.749 16.408 L 194.124 16.408 Z" />
                <rect id="Rectangle_426" data-name="Rectangle 426" width="1.856" height="1.856" x="206.097" y="20.422" />
                <rect id="Rectangle_427" data-name="Rectangle 427" width="1.856" height="1.856" x="206.097" y="13.089" />
                <rect id="Rectangle_428" data-name="Rectangle 428" width="1.856" height="1.856" x="203.553" y="20.422" />
                <rect id="Rectangle_429" data-name="Rectangle 429" width="1.856" height="1.856" x="201.007" y="20.422" />
                <rect id="Rectangle_430" data-name="Rectangle 430" width="1.856" height="1.856" x="198.463" y="20.422" />
                <rect id="Rectangle_431" data-name="Rectangle 431" width="1.856" height="1.856" x="206.097" y="22.839" />
                <rect id="Rectangle_432" data-name="Rectangle 432" width="1.856" height="1.856" x="203.553" y="22.839" />
                <rect id="Rectangle_433" data-name="Rectangle 433" width="1.856" height="1.856" x="201.007" y="22.839" />
                <rect id="Rectangle_434" data-name="Rectangle 434" width="1.856" height="1.856" x="198.463" y="22.839" />
                <rect id="Rectangle_435" data-name="Rectangle 435" width="1.856" height="1.856" x="195.917" y="22.839" />
                <rect id="Rectangle_436" data-name="Rectangle 436" width="1.856" height="1.856" x="195.917" y="13.089" />
                <rect id="Rectangle_437" data-name="Rectangle 437" width="1.856" height="1.856" x="206.097" y="25.253" />
                <rect id="Rectangle_438" data-name="Rectangle 438" width="1.856" height="1.856" x="203.553" y="25.253" />
                <rect id="Rectangle_439" data-name="Rectangle 439" width="1.856" height="1.856" x="201.007" y="25.253" />
                <rect id="Rectangle_440" data-name="Rectangle 440" width="1.856" height="1.856" x="198.463" y="25.253" />
                <rect id="Rectangle_441" data-name="Rectangle 441" width="1.856" height="1.856" x="195.917" y="25.253" />
                <rect id="Rectangle_442" data-name="Rectangle 442" width="1.856" height="1.856" x="203.553" y="27.67" />
                <rect id="Rectangle_443" data-name="Rectangle 443" width="1.856" height="1.856" x="201.007" y="27.67" />
                <rect id="Rectangle_444" data-name="Rectangle 444" width="1.856" height="1.856" x="198.463" y="27.67" />
                <rect id="Rectangle_445" data-name="Rectangle 445" width="1.856" height="1.856" x="195.917" y="27.67" />
            </svg>
        </div>
    );

    if (type == 2) {
        return (
            <div className="field-group-item">
                <div className="form-control form-control--flex ">
                    <label className="form-label">{title}</label>
                    <div className={`form-calendar ${type == 3 ? 'form-calendar--inline' : ''} ${type == 3 && value && value != '-' ? 'active' : ''}`}>
                        {content}
                        {svgContent}
                    </div>
                </div>
                <FieldError validObj={valid} />
            </div>
        );
    }

    return (
        <div className="form-group">
            <label> {title}</label>
            <div className={`form-calendar ${type == 3 ? 'form-calendar--inline' : ''} ${type == 3 && value && value != '-' ? 'active' : ''}`}>
                {content}
                {svgContent}
            </div>
            <FieldError validObj={valid} />
        </div>
    );
}
