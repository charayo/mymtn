import React, { Component } from 'react'

export class Signin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            mtnNumber: true,
            numberField: "",
            userIdField: "",
            minLent: false,
            minLentId: false,
        }
    }
    onFocus = (params)=>{
        if(params == 'number'){
            // console.log('workde');
            this.setState(
                {mtnNumber : true}
            )
            document.getElementById('numInp').removeAttribute('hidden');
            document.getElementById('varCharInp').setAttribute('hidden', true);
        }else{
            // console.log('byId');
            this.setState(
                {mtnNumber : false}
            )
            document.getElementById('numInp').setAttribute('hidden', true);
            document.getElementById('varCharInp').removeAttribute('hidden');
        }
        
        
    }
    handleOnChange = (e)=>{
        if(!e.target.value.match(/[a-z]/i)){
            this.setState(
                {numberField: e.target.value},()=>{
                    if(this.state.numberField.length == 11){
                        this.setState(
                            {minLent:true}
                        )
                    }else{
                        this.setState(
                            {minLent:false}
                        )
                    }
                }
            )
        }

    }
    handleOnChangeId = (e)=>{
        // console.log('userId');
        this.setState(
            {userIdField: e.target.value},()=>{
                if(this.state.userIdField.length == 10){
                    this.setState(
                        {minLentId:true}
                    )
                }else{
                    this.setState(
                        {minLentId:false}
                    )
                }
            }
        )
        

    }
    forInputFields(){
        if(!this.state.mtnNumber){
            document.getElementById('userIdInp').removeAttribute('hidden');
            document.getElementById('userNumInp').setAttribute('hidden', true);
        }else{
            document.getElementById('userNumInp').removeAttribute('hidden');
            document.getElementById('userIdInp').setAttribute('hidden', true);
        }
    }
    componentDidMount(){
        // alert('mounted');
        this.forInputFields();
    }
    componentDidUpdate(){
        // alert('hey');
        this.forInputFields();
    }
    render() {
        
        return (
            <div className="container p-4">
                <div>
                    <h3 className="font-weight-bold">Sign in</h3>
                    <p className="" style={{fontSize:'14px'}}><strong>Y'ello!</strong> Welcome to the single sign-on Digital World!</p>
                </div>
                <div className="d-flex">
                    <div className="" style={{borderRadius:'50px', backgroundColor: '#f2f2f2', padding:'12px 0px'}}>
                        <span className={"mx-1 " + (this.state.mtnNumber ? "bg-warning": false)} onClick={()=>this.onFocus('number')} style={{borderRadius:'20px', padding: '10px 25px', cursor: "pointer"}}><strong>MTN number</strong></span><span className={"mx-1 " + (this.state.mtnNumber == false ? "bg-warning": false)} style={{borderRadius:'20px', padding: '10px 25px', cursor: "pointer"}} onClick={()=>this.onFocus('byId')}><strong>User ID</strong></span>
                    </div>
                    
                </div>
                
                <div className="mt-1 py-4 row">
                    <div className="col-md-6">
                        <input type="text" id="userNumInp" className="my-2 form-control p-3" placeholder="Enter MTN Number" value={this.state.numberField} onChange={this.handleOnChange} maxLength="11" />
                        <input type="text" id="userIdInp" className="my-2 form-control p-3"  placeholder="Enter User ID" value={this.state.userIdField} onChange={this.handleOnChangeId} maxLength="10" />
                    </div>
                    <div className="col-md-6 my-0 py-1">
                        <input type="button" id="numInp" className={"btn text-dark form-control mt-2 btn-inp h-100 " + (this.state.minLent == false ? "btn-dark bg-transparent" : "btn-warning bg-warning border-0")} value="Proceed" style={{padding: '6px', border: '2px solid', borderRadius: '50px'}} />
                        <input type="button" id="varCharInp" className={"btn text-dark form-control mt-2 btn-inp h-100 " + (this.state.minLentId == false ? "btn-dark bg-transparent" : "btn-warning bg-warning border-0")} value="Proceed" style={{padding: '6px', border: '2px solid', borderRadius: '50px'}} hidden />
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Signin
