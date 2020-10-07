import React from "react";

class InputPin extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange=(e)=>{
        if(isNaN(parseInt(e.target.value))){
            e.target.value = ''
        } else{
            this.handleNext(e)
        }
    }
    handleNext = (e)=>{
        let nextInput = document.getElementsByTagName('input')
        for (let i = 0; i < nextInput.length; i++) {
            if(nextInput[i].value && i !== nextInput.length-1) {
                nextInput[i+1].focus()
            }

            if(!nextInput[i].value) {
                 nextInput[i].addEventListener('keydown', e => {
                     console.log(e)
                     if(e.key === 'Backspace' || e.key === 'Delete') {
                         if(i === nextInput.length-1 && nextInput[i].value) {
                             nextInput[i].value = ""
                         } else if(nextInput[i].value) {
                             nextInput[i].value = ""
                         } else {
                             nextInput[i-1].focus()
                         }
                     }
                 })
            }
         }
    }
    render(){
        return (
            <>
              <div className="col-12 col-sm-12 col-md-12 text-center w-100" >
                <input onChange={this.handleChange} type="text" maxLength="1" className='mr-2' required/>
                <input onChange={this.handleChange} type="text" maxLength="1" className='mr-2' required/>
                <input onChange={this.handleChange} type="text" maxLength="1" className='mr-2' required/>
                <input onChange={this.handleChange} type="text" maxLength="1" className='mr-2' required/>
                <input onChange={this.handleChange} type="text" maxLength="1" className='mr-2' required/>
                <input onChange={this.handleChange} type="text" maxLength="1" required/>
              </div>
            </>
          );
    }
}

export default InputPin