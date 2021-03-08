// // change this Component to a class!
// function Category(props){
//     // get data from props and use map to build an array of <li>
//     const datas = data.map((element, index)=>{
//         <li className="cat-link left valign-wrapper" key={index.toString()}>
//             <i className="material-icons">{element.icon}</i>{element.title}
//         </li>
    
//     })
//     // ... code goes here
//     return(
//         <div className="row">
//             <ul className="cat-nav center-align">
//                 {datas}
//             </ul>
//         </div>
//     )
// }



class Category extends React.Component {
    constructor() {
      super()
    }
  
    render(){
        const datas = data.map((element, index) => (
            <li className="cat-link left valign-wrapper" key={index.toString()}>
                <i className="material-icons">{element.icon}</i>{element.title}
            </li>
        ))

        return (
            <div className="row">
                <ul className="cat-nav center-align">
                    {datas}
                </ul>
            </div>
        )
    }
  }
  