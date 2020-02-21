import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCalculation, clearCalculation } from './actions';
import CalcButton from './components/CalcButton';

class CalculatorComponent extends Component {


  _replaceChars(value) {
    value = value.join("");
    value = value.replace(/\//g, '<span class="operatorStyle">÷</span>');
    value = value.replace(/\*/g, '<span class="operatorStyle">×</span>');
    value = value.replace(/\+/g, '<span class="operatorStyle">+</span>');
    value = value.replace(/-/g, '<span class="operatorStyle">-</span>');
    return value;
  }

  render() {
    return (
        <div className='calculator'>
          <div className='calculator-results'>
            <div ref='calculationDisplay' className='calculationDisplay' dangerouslySetInnerHTML={{ __html: this.props.calculation.length ? this._replaceChars(this.props.calculation) : 0 }} />
            <div ref='resultDisplay' className='resultDisplay'>{this.props.result}</div>
          </div>
          
          <button className='clear' onClick={() => this.props.clearCalculation()}>Clear</button>
          <div className='calculator-inputs-row'>
            <CalcButton value={7} />
            <CalcButton value={8} />
            <CalcButton value={9} />
            <CalcButton value="/" htmlCode="247" additionalClass="operator" />
          </div>
          
          <div className='calculator-inputs-row'>
            <CalcButton value={4} />
            <CalcButton value={5} />
            <CalcButton value={6} />
            <CalcButton value='*' htmlCode="215" additionalClass="operator" />
          </div>
          <div className='calculator-inputs-row'>
            <CalcButton value={1} />
            <CalcButton value={2} />
            <CalcButton value={3} />
            <CalcButton value='-' htmlCode="8722" additionalClass="operator" />
          </div>
          <div className='calculator-inputs-row'>
            <CalcButton value={0} additionalClass="zero" />
            <CalcButton value='+' htmlCode="43" additionalClass="operator" />
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCalculation: (inputValue, currentState, currentResult) => dispatch(updateCalculation(inputValue, currentState, currentResult)),
  clearCalculation: () => dispatch(clearCalculation())
});

const mapStateToProps = (state) => ({
  calculation: state.calculation,
  result: state.result
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorComponent);
