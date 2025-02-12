
export default function ConfirmedBooking(props) {

    return (
        <div className="confirmation">
            <div>
                <h4>Booking Confirmed !</h4>
                <h6>Thank you for your reservation. We look forward to seeing you!</h6>
                <table>
                    <tbody>
                    <tr>
                        <td>Date</td>
                        <td>{props.formData.dateString}</td>
                    </tr>
                    <tr>
                        <td>Time</td>
                        <td>{props.formData.time}</td>
                    </tr>
                    <tr>
                        <td>Number of Guests</td>
                        <td>{props.formData.noGuests}</td>
                    </tr>
                    <tr>
                        <td>Occasion</td>
                        <td>{props.formData.occasion}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}