import React from 'react'

export default function About(props) {
    return (    
        <>
            <div className={`container my-3 h3 ${props.textColor}`}>About Us </div>
            <div className={`container my-3 ${props.textColor}`} style={props.myStyle}>
                <div className="accordion my-3" id="accordionExample" style={props.myStyle}>
                    <div className="accordion-item" style={props.myStyle}>
                        <h2 className="accordion-header">
                            <button className={`accordion-button ${props.textColor}`} type="button" style={props.myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className={`accordion-body  ${props.textColor}`}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={props.myStyle}>
                        <h2 className="accordion-header">
                            <button className={`accordion-button collapsed ${props.textColor}`} style={props.myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className={`accordion-body  ${props.textColor}`} style={props.myStyle}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={props.myStyle}>
                        <h2 className="accordion-header">
                            <button className={`accordion-button collapsed ${props.textColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" style={props.myStyle} aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={props.myStyle}>
                            <div className={`accordion-body  ${props.textColor}`} style={props.myStyle}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
