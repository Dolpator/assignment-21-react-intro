var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery')
console.log(React);


var HomeView = React.createClass({
      render: function(){
         var congressmanData = this.props.userDataList.map(function(legObj, i){
            return <ProfileView userDataObj={legObj} key={i} />
         })
            return(
                  // <ZipCodeView/>
                  // {}
                  <ul>
                  {congressmanData}
                  </ul>

            )
      }
})
var ProfileView = React.createClass({
      render: function(){
         return (
         <div className = "col-sm-6 col-md-4">
            <div className = "thumbnail">
                 <h2> {this.props.userDataObj.first_name} {this.props.userDataObj.last_name}</h2>
                 <h4> {this.props.userDataObj.title}{'--'}{this.props.userDataObj.party}{'-'}{this.props.userDataObj.state_name}</h4>
               <ul>
                 <li>email: {this.props.userDataObj.oc_mail} </li>
                 <li>website: {this.props.userDataObj.website} </li>
                 <li>Facebook: {this.props.userDataObj.facebook_id} </li>
                 <li>twitter: {this.props.userDataObj.twitter_id} </li>
               </ul>
                 <h6>Term End {this.props.userDataObj.term_end}</h6>
            </div>
         </div>

         )
      }

})

// var ZipCodeView = React.createClass({
//       render: function(){
//          // var zipInput = document.querySelector('.input-value')
//          var zipCodeData = this.props.zipCodeDataList.map(function(returnData, i)){
//             return(
//                <div className="input">
//                   <input className="input-value" type="text" placeholder="zipCode" />
//                </div>
//          var keyInput = function(evt){
//                   if(evt.keyCode === 13){
//                      console.log(evt.target.value)
//                      var zipInputEl = evt.target.value;
//                      if(zipInputEl === zipInput){
//                         console.log(zipInputEl)
//                      }
//                   }
//                }
//                      zipInput.addEventListener('keydown', keyInput)
//                 )
//               }
//             }
//         })
$.getJSON('http://congress.api.sunlightfoundation.com/legislators?apikey=348a9f2dfe12419ea64eaad9b7fce6a0').then(function(serverRes){
   console.log(serverRes);
   ReactDOM.render(<HomeView userDataList={serverRes.results} />, document.querySelector('.leg-data'))
})

// $.getJSON('https://congress.api.sunlightfoundation.com/districts/locate?zip='+ zipInput +'&apikey=348a9f2dfe12419ea64eaad9b7fce6a0').then(zipCodeData)
//    ReactDOM.render(<HomeView zipCodeDataList={zipCodeData.results} />, document.querySelector('.container'))
// })
