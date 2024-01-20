import React from "react"

const ServicesOffered = () => {
    
    const Fleet = ["UberXL","Uber Comfort","Black Suv"] // Maybe turn this into list of dicts with list being the values of drivers
    const TripOptions = ["Airport Pick Up", "Long Distance Trip", "Hourly Booking Rides"]

    return(
        <div className="main">
            <div className="services">
                
            </div>
            <div>
                <button>
                    Order Now
                </button>
            </div>
        </div>
    )
}

export default ServicesOffered;
