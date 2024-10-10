import WhatsApp from "../assets/whatsapp.svg";
import Phone from "../assets/phone.svg";
import Email from "../assets/email.svg";

const ContactBar = () => {
    return (
        <div className="flex min-w-36">
            <a href="tel:+972-509-31-5511">
                <img src={Phone} alt="Phone" className="h-7 w-7 m-3 mt-1" />
            </a>
            <a href="https://wa.me/972509315511?text=Hey%20Tuvia%2C%20I%27d%20like%20to%20interest%20you%20in%20a%20job%20at...">
                <img src={WhatsApp} alt="WhatsApp" className="h-7 w-7 m-3 mt-1" />
            </a>
            <a href="mailto:tuviaa109@gmail.com?subject=Job%20Opportunity&body=Hey%20Tuvia%2C%20I%27d%20like%20to%20interest%20you%20in%20a%20job%20at...">
                <img src={Email} alt="Email" className="h-7 w-7 m-3 mt-1" />
            </a>
        </div>
    );
};
export default ContactBar;
