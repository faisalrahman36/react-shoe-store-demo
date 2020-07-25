

//import React from "react";

/*
import {
    Link,
    Outlet,
    useParams
  } from "react-router-dom";
  
class NotFound extends Component {
    render() {
        return (
      <div>
        <h1>Not found!</h1>
        <p>Sorry your page was not found!</p>
      </div>
    );
  }
  
}
  class Launch extends Component {
      render() {
    return (
      <div>
        <h1>Launch</h1>
  
        <Outlet />
      </div>
    );
  }
} 
  class LaunchIndex extends Component {
      render() {
    return (
      <ul>
        {Object.entries(shoes).map(([slug, { name, img }]) => (
          <li key={slug}>
            <Link to={`/launch/${slug}`}>
              <h2>{name}</h2>
              <img src={img} alt={name} />
            </Link>
          </li>
        ))}
      </ul>
    );
  }

}
  
  class LaunchShoe extends Component {
      render() {
    const { slug } = useParams();
    const shoe = shoes[slug];
  
    if (!shoe) {
      return <h2>Not Found!</h2>;
    }
  
    const { name, img } = shoe;
  
    return (
      <div>
        <h2>{name}</h2>
        <img src={img} alt={name} />
      </div>
    );
  }
  
}
*/

  const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      description: "This is some description of the shoe."
      ,price: 233.5   
      },
    "jordan-mars-270-london": {
      name: "JORDAN MARS",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        description: "This is some description of the shoe."
        ,price: 233.5
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        description: "This is some description of the shoe."
        ,price: 233.5
    },

    "RACER-BLUE-higher-price": {
      name: "RACER BLUE HIGHER Price",
      img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      
      description: "This is some description of the shoe. Basically the same shoe as Racer blue but with higher price."
      ,price: 433.5   
      }
  };
  
  export default shoes;