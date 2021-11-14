import React from 'react';
import arrowRight from '../images/arrow-right16_R.svg';
import 
const ActivitiesList = (props) => {
  return (
    <section className="container">
      <div className="flex flex-between">
        <h2>近期活動</h2>
        <Link to="/activity" className="text-secondary">
          查看更多活動
          <img src={arrowRight} alt="arrowRight" />
        </Link>
      </div>
      <ul>
        {
          props.data.map((item, index) => (
            <li key={item.ID}>
              <Link to={`/activity/${item.ID}`}>
                <div className="flex flex-between">
                  <img src={ item.picture.} alt="" />
                  <div className="flex flex-column">
                    <h3>{item.Name}</h3>
                    <p>{item.Description}</p>
                  </div>
                  <div className="flex flex-column">
                    <p>{item.City}</p>
                    <p>{item.StartDate}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default ActivitiesList;
