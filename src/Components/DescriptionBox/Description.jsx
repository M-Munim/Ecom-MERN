import React from 'react'
import "./Description.scss"

const Description = () => {
    return (
        <div className='descriptionBox'>

            <div className="descNavigator">
                <div className="descNavBox">
                    Description
                </div>

                <div className="descNavBox fade">
                    Reviews(122)
                </div>
            </div>

            <div className="descDesc">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit veniam ipsa porro id dicta necessitatibus optio accusantium unde laudantium. Porro consequuntur culpa doloremque eveniet reiciendis nam autem delectus accusantium nulla.</p>

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quos iusto aliquid harum quae et praesentium iure asperiores inventore aliquam.
                </p>
            </div>
        </div>
    )
}

export default Description