import {about, contact} from '../../portfolio'
import './Contact.css'
import {Description} from "@material-ui/icons";

const Contact = () => {

    if (!contact.email) return null

    return (
        <section className='section contact center' id='contact'>
            <h2 className='section__title'>Contact</h2>

            {contact.description &&
                <p className='section__description'>{contact.description}</p>} {/* Boşluklu açıklama */}

            <a href={`mailto:${contact.email}`}>
                <span type='button' className='btn btn--outline'>
                    Email me
                </span>
            </a>
        </section>
    )
}

export default Contact

