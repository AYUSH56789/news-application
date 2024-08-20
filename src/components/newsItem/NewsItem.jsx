import React, { Component } from 'react';
import Loader from '../loader/Loader';


export default function NewsItem({title, discp, imageurl, url, author, time, source}) {

  // Define the maximum length of title and description
  const maxTitleLength = 40;
  const maxDescriptionLength = 100;

  // Truncate the title and description if they exceed the maximum length
  title = title.length > maxTitleLength ? title.slice(0, maxTitleLength) + '...' : title;
  discp = discp.length > maxDescriptionLength ? discp.slice(0, maxDescriptionLength) + '...' : discp;
  console.log("asdfghj"+imageurl+"12345678902345678"+url);
  
  return (
    <div className="card m-2">
        {url ? (
          <div><img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px"  /><span className="position-absolute top-0 start-0  badge  bg-danger">
          {source}
           <span className="visually-hidden">unread messages</span>
         </span></div>
        ) : (
          <Loader height="200px" width="300px" />
        )}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discp?discp:"Description is Empty..."}</p>
          <p style={{fontSize:"small",opacity:0.7}} ><span>By {author}</span> <span>on {new Date(time).toGMTString()}</span></p>
          <a href={url} target="_blank" className="btn btn-sm btn-primary">Know More</a>
        </div>
        
      </div>
  )
}


// export default class NewsItem extends Component {
//   render() {
//     let { title, discp, imageurl, url, author, time, source } = this.props;

//     // Define the maximum length of title and description
//     const maxTitleLength = 40;
//     const maxDescriptionLength = 100;

//     // Truncate the title and description if they exceed the maximum length
//     title = title.length > maxTitleLength ? title.slice(0, maxTitleLength) + '...' : title;
//     discp = discp.length > maxDescriptionLength ? discp.slice(0, maxDescriptionLength) + '...' : discp;

//     return (
//       <div className="card m-2">
//         {imageurl ? (
//           <div><img src={imageurl} className="card-img-top" alt="..." height="200px"  /><span className="position-absolute top-0 start-0  badge  bg-danger">
//           {source}
//            <span className="visually-hidden">unread messages</span>
//          </span></div>
//         ) : (
//           <Loader height="200px" width="300px" />
//         )}
//         <div className="card-body">
//           <h5 className="card-title">{title}</h5>
//           <p className="card-text">{discp?discp:"Description is Empty..."}</p>
//           <p style={{fontSize:"small",opacity:0.7}} ><span>By {author}</span> <span>on {new Date(time).toGMTString()}</span></p>
//           <a href={url} target="_blank" className="btn btn-sm btn-primary">Know More</a>
//         </div>
        
//       </div>
//     );
//   }
// }
