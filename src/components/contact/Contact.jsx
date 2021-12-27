import "./contact.scss"
import "semantic-ui-css/semantic.min.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

export default function Contact() {
    const SERVICE_ID = "service_anlp0nc";
    const TEMPLATE_ID = "template_9h8oxmj";
    const USER_ID = "user_LjzI6LZtE7sjAWa15k4LV";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              title: "Message Sent Successfully!"   
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              title: "Oops, something went wrong!",
              text: error.text,
            })
          });
        e.target.reset()
      };


    return (
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <div className="wrapper">
                <div className="left">
                </div>
                <div className="right">
                    <Form onSubmit={handleOnSubmit}>                         
                            <Form.Field
                                className="email"
                                id="form-input-control-email"
                                control={Input}  
                                label="Email"
                                name="user_email"
                                placeholder="Email…"
                                required
                                
                            />

                        <Form.Field
                            id="form-input-control-last-name"
                            control={Input}
                            label="Name"
                            name="user_name"
                            placeholder="Name…"
                            required
                        />
                        <Form.Field
                            id="form-textarea-control-opinion"
                            control={TextArea}
                            label="Message"
                            name="user_message"
                            placeholder="Message…"
                            required
                        />
                        <Button type="submit" color="green">Submit</Button>
                    </Form>
                </div>
            </div>


        </div>
    )
}
