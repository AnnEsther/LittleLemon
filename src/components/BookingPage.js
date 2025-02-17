
import BookingForm from "./BookingForm.js";


export default function BookingPage(props) {

    return (
        <>
            <BookingForm formData={props.formData} setFormData={props.setFormData} submitForm={props.submitForm} availableTimeState={props.availableTimeState} availableTimeDispatch={props.availableTimeDispatch}></BookingForm>
        </>
    );
}
