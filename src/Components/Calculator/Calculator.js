import React from 'react';
import './Calculator.css'


class Calculator extends React.Component {

  onBSalaryChange = (event) => {
    this.setState(this.props.setBSalary(event.target.value))
  }

  onDOBChange = (event) => {
    this.setState(this.props.setDOB(event.target.value))
  }

  onSubmitInput = () => {
    this.props.onRouteChange('rep')
  }

  render() {
    return(
      <div className="pt5">
        <div className='Pattern br3 pl5 black k-10 mv3 w-70 w-70-m w-50-l mw7 shadow-1 center'>
          <h1 style={{fontFamily: 'Courier New'}}>Irfan Award Quick-Tool<p className="f6">This automated tool generates an estimate figure of the final Irfan Award.</p></h1>
          <div></div>
        </div>
        <article className='Pattern br3 black k-10 mv3 w-70 w-70-m w-50-l mw7 shadow-1 center'>
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="input" className="ba b--transparent ph0 mh0">
                <div className="mt3">
                  <label style={{fontFamily: 'Courier New'}} className="db fw6 lh-copy f6 black b">Basic Salary</label>
                  <input
                    style={{fontFamily: 'Courier New'}}
                    onChange={this.onBSalaryChange}
                    placeholder="13500"
                    className="pa2 b black ba bg-transparent hover-bg-black hover-black w-100 ba b--near-black"
                    type="text"/>
                  </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6 black b" style={{fontFamily: 'Courier New'}}>Date of Birth</label>
                  <input
                    style={{fontFamily: 'Courier New'}}
                    onChange={this.onDOBChange}
                    placeholder="1995-10-26"
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100 ba b--near-black"
                    type="date"
                    name="date"
                    id="date-of-birth"/>
                  </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitInput}
                  className="b pa3 pv1 input-reset ba b--near-white white bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Generate Report"/></div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Calculator;
