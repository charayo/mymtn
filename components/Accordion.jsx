import React, { Component } from "react";

 class Accordion extends Component {
     
     toggleIcon = (e)=>{
        //  console.log(e.target);
        if(e.target.innerHTML == '+'){
            e.target.innerHTML = '-';
        }else{
            e.target.innerHTML = '+';
        }
     }
     
  render() {
    return (
      <div>
        <div className="container p-3">
            <div className="panel-group row" id="accordion">
                <div className="panel panel-default col-md-6">
                    <div className="panel-heading">
                        <div className="container d-flex justify-content-between m-auto ">
                            <h6>What's <strong>MTN</strong> number?</h6>
                            <button type="button" onClick={()=>this.toggleIcon(event)} className=" border-0 text-warning bg-transparent accord-btn" data-toggle="collapse" data-parent="#accordion" data-target="#collapse1" style={{cursor:'pointer'}}>+</button>  
                        </div>
                    </div>
                    <div id="collapse1" className ="panel-collapse collapse">
                        <div className = "panel-body container">MTN number is the unique number assigned to your service at 
                            the point of purchase or delivery. 
                            It can be found on the device pack or communicated by site engineer</div>
                    </div>
                    <div className="container">
                        <hr style={{marginTop: '-2px'}}/>
                    </div>
                </div>
                <div className="col-md-6">

                </div>
                {/* Heres the end of 1st accordion element */}
                <div className = "panel panel-default col-md-6">
                    <div className = "panel-heading">
                        <div className="container d-flex justify-content-between m-auto ">
                            <h6>Where and how to get User ID ?</h6>
                            <button type="button" onClick={()=>this.toggleIcon(event)} className = " border-0 text-warning bg-transparent accord-btn" data-toggle="collapse" data-parent="#accordion" data-target="#collapse2" style={{cursor:'pointer'}}>+</button>  
                        </div>
                    </div>
                    <div id="collapse2" className = "panel-collapse collapse in">
                        <div className = "panel-body container">
                            User ID is the unique username or number assigned to your serv
                            ice at the point of purchase or delivery. It can be found on 
                            the device pack or communicated by site engineer
                        </div>
                    </div>
                    <div className="container">
                        <hr style={{marginTop: '-2px'}}/>
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div>
            
        </div>
      </div>
    );
  }
}
export { Accordion as default } 