import React from 'react'

export default function Home(props) {
    return (
        <>
            
    <div className="container mx-4 my-4">
        <div className={`container text-center ${props.textColor}`}>
            <h3>Welcome to TextUtils</h3>
        </div>
        <div className={`container row my-4 ${props.textColor}`}>
            <div className={`col-6 ${props.textColor}`}>
                <p>TextUtils is a simple online tool that helps you manipulate and format your text in various ways.</p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quia aliquid velit asperiores earum quisquam rerum at exercitationem, sapiente placeat distinctio, incidunt magni pariatur vitae debitis. Blanditiis architecto incidunt, voluptatibus libero corrupti ipsam pariatur accusantium aliquam totam hic veniam sunt earum magni alias. Deleniti corporis in, aliquid accusantium sapiente beatae quae sequi. Incidunt voluptatum fuga numquam veritatis molestiae? Eos, porro.
            </div>
            <div className={`col-6 ${props.textColor}`}>
                <p>Whether you need to convert text case, remove extra spaces, or perform other text transformations, TextUtils has got you covered.</p>

                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam expedita sunt perspiciatis id atque suscipit numquam nisi doloribus, rerum quasi temporibus optio labore eos molestiae nulla adipisci reiciendis laborum delectus dolorum ad aspernatur! Quaerat fugiat consectetur deleniti laudantium amet commodi labore soluta in, quisquam aspernatur quae minima est ducimus ab accusamus, esse necessitatibus reprehenderit, aliquid molestiae velit. Voluptatem reiciendis velit eius ratione atque dolorum hic inventore illum quia, earum saepe quasi id fugit laudantium corrupti obcaecati ipsam! Sunt, dolore.</div>
        </div>
    </div>
        </>
    )
}
