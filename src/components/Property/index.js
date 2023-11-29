import { useCallback, useEffect, useState } from "react"

const PropertySale = (props)=> {
    return (
    <section style={{"display":"grid"}}>
        {props.property.map((data) => {
         return <section key={data.id} style={{"marginTop":"5px"}}>
            <img src={data.url}  alt="property" />
            <p>{data.name}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <p>{data.location}</p>
            {data.available && <del>sold</del>}
        </section>
        })}
    </section>)
}

const Contact = () => {
    const [property, setProperty] = useState([])
    const [loading, setLoading] = useState(false)

    const propertyHandler = useCallback(() => {
        setLoading(true)
       const items = [
             {
                "id": 1,
                "name": "bungalow",
                "url": "",
                "description": "terraced evenly placed",
                "price": "NGN 20,000,000",
                "location": "lekki",
                "available": true,
            }, {
                "id": 2,
                "name": "duplex",
                "url": "",
                "description": "spacious evenly placed",
                "price": "NGN 10,000,000",
                "location": "lekki",
                "available": false,
            }, {
                "id": 3,
                "name": "bungalow",
                "url": "",
                "description": "fields with pool evenly placed",
                "price": "NGN 30,000,000",
                "location": "Epe",
                "available": true,
            }
        ]
         setTimeout(()=>{
            setProperty(items)
            setLoading(false)
        },2000)
        
        
        /* fetch("https://rest.com/api/v1/")
            .then((response) => {
                response.json()
            })
            .then((result) => {
                setProperty(result)
            })
            .catch((err) => {console.log(err)}) */
    }, [])
    
    useEffect(() => {
        propertyHandler()
    }, [propertyHandler])

    return <section className="main">
        <h2>Properties On Sale</h2>
        {loading ? <p>loading..</p> : <PropertySale property={property}/>}
    </section>
}

export default Contact;