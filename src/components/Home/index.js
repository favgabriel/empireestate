import {FaHandHoldingUsd, FaHome, FaHandshake} from "react-icons/fa"
import {useRef} from "react"
const HouseList=(props)=> {
    return (
        <section style={{ "display": "inline-flex" }}>
            {props.houses.map((s) => {
                return <img alt={s.substring(0, s.lastIndexOf("."))} href={`${s}`} key={s} />
            })}
        </section>
    )
}


const Home = () => {
    const fullname = useRef(undefined)
    const email = useRef(undefined)
    const phonenumber = useRef(undefined)
    
    const houses = ["house.png", "house1.png", "house2.png", "house3.png"]

    const sendContact=()=>{
        const param = [{
            "name": fullname.current.value,
            "phonenumber": phonenumber.current.value,
            "email": email.current.value
        }]
        console.log(param)
    }
return <>
        <section className="main">
            <blockquote>
                <q>The best time to invest was 20 years ago, the next best time to invest is today</q>_ <b>Warren Buffet</b>
            </blockquote>
            <br/>
            <p>Lagos offers the best retirements and investment opportunities to put your money on.</p>
            <p>With Real Estates we have got you covered on all the best deals you can get out of landed assets.</p>
            <br/>
            <section>
                <h3>Some of our available Landed Properties</h3>
                <HouseList houses={houses} />
            </section>
        </section>

        <section className="main">
            <h2>Services</h2>
            <div className="card-container">
                <section className="card">
                    <FaHandshake size={"50"}/>
                    <p>Land Consultation</p>
                </section>
                <section className="card">
                    <FaHandHoldingUsd size={"50"}/>
                    <p>Sales</p>
                </section>
                <section className="card">
                    <FaHome size={"50"}/>
                    <p>Property Survey</p>
                </section>
            </div>
        </section>
        <section className="main">
            <h2>Testimonials</h2>
            <section className="card-container">
                <article className="card_comment">
                  <p>Augustine Chukwudi</p>
                    <q>Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup</q>  
                </article>
                <article className="card_comment">
                  <p>Ignes</p>
                    <q> Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup</q>  
                </article>
                <article className="card_comment">
                  <p>Mercy tommy</p>
                    <q> Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup Loremsup</q>  
                </article>
            </section>
        </section>
        <section className="main" id="contact">
            <h2>Book A Call</h2>
            <form onSubmit={sendContact}>
                    <fieldset>
                        <legend>Contact Us</legend>
                        <div>
                           <label>Full Name: </label>
                        <input ref={fullname} name="fullname" placeholder="Enter FullName" type="text" /><br/>
                        <label>Email: </label>
                        <input ref={email} name="email" placeholder="Enter Email" type="email" /><br/>
                        <label>Phone Number: </label>
                        <input ref={phonenumber} name="phonenumber" placeholder="Enter PhoneNumber" type="tel" /><br/>
                        <button type="submit">submit</button> 
                        </div>
                        
                    </fieldset>
                </form>
        </section>
    </>

}

export default Home;