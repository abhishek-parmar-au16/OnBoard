import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './ed.css'


class Qualification extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    
    this.onChangeTen = this.onChangeTen.bind(this);
    this.onChangeBoard = this.onChangeBoard.bind(this.ten);
    this.onChangePercentage = this.onChangePercentage.bind(this.ten);
    this.onChangeYear = this.onChangeYear.bind(this.ten);
    this.onChangeBCA = this.onChangeBCA.bind(this);
    this.onChangeBCOM = this.onChangeBCOM.bind(this);
    this.onChangeBSC = this.onChangeBSC.bind(this);
    this.onChangeBE = this.onChangeBE.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      ten:{
        board: '',
        percentage: '',
        year: '',
        course:''
      },
    }
  }
  
  

  onChangeTen(e) {
    this.setState({ ten: e.target.value })
  }
  onChangeBoard(e) {
    this.setState({ board: e.target.value })
  }
  onChangePercentage(e) {
    this.setState({ percentage: e.target.value })
  }
  onChangeYear(e) {
    this.setState({ year: e.target.value })
  }
  onChangeBCA(e) {
    this.setState({ bca: e.target.value })
  }
  onChangeBCOM(e) {
    this.setState({ bcom: e.target.value })
  }
  onChangeBSC(e) {
    this.setState({ bsc: e.target.value })
  }
  onChangeBE(e) {
    this.setState({ be: e.target.value })
  }



  onSubmit(e) {
    e.preventDefault()
    alert("Qualification Detail Saved Sucessfully")

    const QualificationDetailObject = {
      ten:this.state.ten,
      board: this.state.ten.board,
      percentage: this.state.ten.percentage,
      year: this.state.ten.year,
      course:this.state.ten.course,
      bca: this.state.bca,
      bcom: this.state.bcom,
      bsc: this.state.bsc,
      be: this.state.be,

    };
    axios.post('http://localhost:2021/api/qualification-info', QualificationDetailObject)
      .then(res => console.log(res.data));

    this.setState({ ten:' ', board: '', percentage: '', year: '' })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div class="  col-md-7 table-hover position-absolute top-50 start-50 translate-middle">

          <div>
            <h3>QUALIFICATION</h3>
            <tr>

              <td>
                <table  class="table-hover thead-dark">

                  <tr>
                    <td align="center" ><b>Sl.No.</b></td>
                    <td align="center" ><b>Examination</b></td>
                    <td align="center" ><b>Board</b></td>
                    <td align="center" ><b>Percentage</b></td>
                    <td align="center" ><b>Year of Passing</b></td>
                    <td align="center" ><b>Course</b></td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td value={this.state.ten} onChange={this.onChangeTen}>Class X</td>
                    <td><input type="text" name="ClassX_Board" maxlength="30" value={this.state.ten.board} onChange={this.onChangeBoard} /></td>
                    <td><input type="number" name="ClassX_Percentage" maxlength="30" value={this.state.ten.percentage} onChange={this.onChangePercentage} /></td>
                    <td><input type="number" name="ClassX_YrOfPassing" maxlength="30"value={this.state.ten.year} onChange={this.onChangeYear} /></td>
                    <td><input type="text" name="ClassX_Course" maxlength="30"value={this.state.ten.course} onChange={this.onChangeCourse} /></td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>Class XII</td>
                    <td><input type="text" name="ClassXII_Board" maxlength="30" /></td>
                    <td><input type="text" name="ClassXII_Percentage" maxlength="30" /></td>
                    <td><input type="text" name="ClassXII_YrOfPassing" maxlength="30" /></td>
                    <td><input type="text" name="ClassXII_Course" maxlength="30" /></td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>Graduation</td>
                    <td><input type="text" name="Graduation_Board" maxlength="30" /></td>
                    <td><input type="text" name="Graduation_Percentage" maxlength="30" /></td>
                    <td><input type="text" name="Graduation_YrOfPassing" maxlength="30" /></td>
                    <td><input type="text" name="Graduation_Course" maxlength="30" /></td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>Masters</td>
                    <td><input type="text" name="Masters_Board" maxlength="30" /></td>
                    <td><input type="text" name="Masters_Percentage" maxlength="30" /></td>
                    <td><input type="text" name="Masters_YrOfPassing" maxlength="30" /></td>
                    <td><input type="text" name="Masters_Course" maxlength="30" /></td>
                  </tr>

                  <tr>
                    <td></td>
                    <td></td>
                    <td align="center">(10 char max)</td>
                    <td align="center">(upto 2 decimal)</td>
                  </tr>
                </table>

              </td>
            </tr>
            {/* <div>
                <h3>COURSES APPLIED FOR</h3>
              <tr>
                <td>
                  BCA
                  <input type="radio" name="Course_BCA" value="BCA" value={this.state.bca} onChange={this.onChangeBCA} />
                  B.Com
                  <input type="radio" name="Course_BCom" value="B.Com" value={this.state.bcom} onChange={this.onChangeBCOM} />
                  B.Sc
                  <input type="radio" name="Course_BSc" value="B.Sc" value={this.state.bsc} onChange={this.onChangeBSC} />
                  B.E
                  <input type="radio" name="Course_BE" value="B.E" value={this.state.be} onChange={this.onChangeBE} />
                </td>
              </tr>
            </div> */}

          </div>

          <br />
          <Button variant="danger" size="lg" block="block" type="submit">
            Save
          </Button>
          <button type="button" style={{ float: 'right', width: '75px', height: '48px' }} onClick={event => window.location.href = '/Family'} class="btn btn-primary">Next</button>

        </div>
      </form>
    );
  }
}

export default Qualification;


