import { FaCertificate, FaShieldAlt } from "react-icons/fa"
const Partners = () => {
    const imgs = ["partner1", "partner2", "partner3", "partner4", "partner5", "partner6"]
    return imgs.map((s) => {
        return <img key={s} src={`${s}`} alt={`partner-${s}`} />
    })
}
const About = () => {
    return <main className="main">
        <h2>About</h2>
        <section>
            <p>We are a leading Realtor Agency in Lagos Nigeria, and we offer the best Real estates landed deals.</p>
            <p>Our Portfolio ranges from local and corporate buildings, land Hectares and sites.</p>
            <p>we deliver Certified ownership certificates of all our assets, to prevent forsighted issues.</p>
        </section>
        <h3>Partners</h3>
        <div className="partners">
            <Partners />
        </div>
        <h3>Why Us</h3>
        <section>
            <dl>
                <dt>Certified <FaCertificate color="green" /></dt>
                <dd>- we offer certification of landed Assets purchased, with verified ownership</dd>
                <dt>Secured <FaShieldAlt color="green" /> </dt>
                <dd>- we offer you a secure process to own Land assets in lagos</dd>
            </dl>
        </section>
    </main>
}
export default About;