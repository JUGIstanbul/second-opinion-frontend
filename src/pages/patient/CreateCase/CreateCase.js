import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Snackbar, Chip, Grid, CardMedia } from 'material-ui';
import { connect } from 'react-redux';
import { DatePicker } from 'material-ui-pickers';
import { FormField } from '../../../components/common';
import { createCase } from '../../../store/action/caseActions';
import './CreateCase.css';

import { control } from '../../../utils/form';
import Layout from "../../../layout/Layout";

class CreateCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSuccess:false,
      vertical: 'bottom',
      horizontal: 'right',
      patientId: 123,
      nickname: 'string',
      illnessStartDate: new Date(),
      symptoms: 'symptoms',
      note: 'note',
      treatments: [
        {
          description: 'string',
          media: [{ id: 123 }],
        },
      ],

      medicine: [
        { id: 0, label: '1.ilac' },
        { id: 1, label: '2.ilac' },
        { id: 2, label: '3.ilac' },
        { id: 3, label: '4.ilac' },
        { id: 4, label: '5.ilac' },],
    };
    this.onCreate = this.onCreate.bind(this);
  }

  handleRequestDelete = data => () => {


    const medicine = [...this.state.medicine];
    const medicineToDelete = medicine.indexOf(data);
    medicine.splice(medicineToDelete, 1);
    this.setState({ medicine });
  };

  onCreate(e) {
    debugger;
    this.props.createCase(this.state).then(res => {
      this.setState({
        isSuccess:true
      })
    });
  }

  render() {
    const { illnessStartDate, isSuccess,
      vertical,
      horizontal } = this.state;
    return (
      <Layout>

        <div style={{width: '100%', position: 'relative', overflow: 'hidden'}}>
          <Grid container>

            <Grid item xs={12}  style={{ height: '88vh', backgroundColor: 'white', justify: 'center',
                    display: '-webkit-box',
                    display: '-webkit-flex',
                    display: '-ms-flexbox',
                    display: 'flex',
                    '-webkit-box-orient': 'vertical',
                    '-webkit-box-direction': 'normal',
                    '-webkit-flex-direction': 'column',
                    '-ms-flex-direction': 'column',
                    'flex-direction': 'column',
                    '-webkit-box-pack': 'center',
                    '-webkit-justify-content': 'center',
                    '-ms-flex-pack': 'center',
                    'justify-content': 'center',
                    '-webkit-box-align': 'center',
                    '-webkit-align-items': 'center',
                    '-ms-flex-align': 'center',
                    'align-items': 'center',
                    '-webkit-box-flex': '1',
                    '-webkit-flex': '1',
                    '-ms-flex': '1',
                    'flex': '1'
                  }}>
              <div>
                <h2>Create Case</h2>

                <div>
                  <DatePicker value={illnessStartDate} onChange={this.handleDateChange} />
                    <br />
                  <FormField type="textarea" label="symptoms" {...control(this, 'symptoms')} />
                    <br />
                  <FormField type="textarea" label="note" {...control(this, 'note')} />


                  <div>
                    <h6>medicine</h6>
                    {this.state.medicine.map(data => {
                      return (
                        <Chip
                          label={data.label}
                          key={data.id}
                          onRequestDelete={this.handleRequestDelete(data)}
                          className="chip wrapper"
                        />
                      );
                    })}
                  </div>

                  <Button raised color="primary" onClick={this.onCreate}>
                    Create Case
                  </Button>
                </div>

                <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={this.state.isSuccess}

                  SnackbarContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                  message={<span id="message-id">Case Saved!</span>}
                />
              </div>
            </Grid>
          </Grid>


        </div>


      </Layout>
    );
  }
}

CreateCase.propTypes = {};
CreateCase.defaultProps = {};

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  createCase,
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateCase);
