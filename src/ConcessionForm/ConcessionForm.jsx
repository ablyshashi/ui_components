// import FSelect from '../form/FSelect';
import DatePickerField from '../form/DatePickerField';
import TextField from '../form/TextField';
import ButtonRadio from '../form/ButtonRadio';

export default function ConcessionForm({ formFld, handleOnChange, validMsg }) {
    const concessions = [
        { label: 'Centrelink Pensioner Concession Card (PCC)', value: 'centrelink_pensioner_concession_card' },
        { label: 'Centrelink Health Care Card (HCC)', value: 'centrelink_health_care_card' },
        { label: 'Veterans Affairs - Pensioner', value: 'dva_pension_concession_card' },
        // { label: 'Veterans Affairs - DVA Gold', value: 'dva_gold_card_eda' },
        { label: 'Veterans Affairs - DVA Gold Card (EDA)', value: 'dva_gold_card_eda' },
        { label: 'Veterans Affairs - DVA Gold Card (TPI)', value: 'dva_gold_card_tpi' },
        { label: 'Veterans Affairs - DVA Gold Card (WW)', value: 'dva_gold_card_ww' },
        { label: 'Queensland Seniors Card', value: 'queensland_seniors_card' },
        { label: 'ACT Service Access Card', value: 'sa_generic_concession_card' },
        { label: 'Asylum seeker card', value: 'asylum_seeker' },
    ];
    return (
        <>
            {/* <FSelect
                placeholder="Concession card"
                type="status"
                options={concessions}
                onChange={(e) => {
                    e.target.name = 'concession_card_name';
                    handleOnChange(e);
                }}
                value={formFld.concession_card_name}
                valid={validMsg['concession_card_name']}
            ></FSelect> */}
            <TextField name={'concession_card_number'} value={formFld.concession_card_number} onChange={handleOnChange} valid={validMsg['concession_card_number']} title={'Card number'} />
            <TextField name={'concession_card_holder'} value={formFld.concession_card_holder} onChange={handleOnChange} valid={validMsg['concession_card_holder']} title={'Card Holder Name'} />
            {/* {<DatePickerField name={'concession_issued'} value={formFld.concession_issued} onChange={handleOnChange} valid={validMsg['concession_issued']} title={'Issued'} maxDate={new Date()} />}
            {<DatePickerField minDate={new Date()} name={'concession_expiry'} value={formFld.concession_expiry} onChange={handleOnChange} valid={validMsg['concession_expiry']} title={'Expiry'} />} */}


            {<TextField name={'concession_address'} value={formFld.service_address} readOnly valid={validMsg['concession_address']} title={'Concession Card Address'} />}


        </>
    );
}
