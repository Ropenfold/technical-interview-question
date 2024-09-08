// import react from 'react';
import './moonImage.css'

const MoonImage = (props) => {
     const { item: {links, data} } = props
     console.log('title', data[0])
    return (
          <div class = "card">
          <img src={links[0].href} alt={data[0].title}/>
            <div class="card-content">
              <h2>
                {data[0].title}
              </h2>
              <p>
                {data[0].description}
              </p>

            </div>
          </div>
    )

}

export default MoonImage;