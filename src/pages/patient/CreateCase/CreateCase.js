import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button,Snackbar,Chip } from 'material-ui';
import { connect } from 'react-redux';
import { DatePicker } from 'material-ui-pickers';
import { FormField } from '../../../components/common';
import { createCase } from '../../../store/action/caseActions';
import './CreateCase.css';

import { control } from '../../../utils/form';

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
      <div>
        <h2>Create Case</h2>

        <div>
          <DatePicker value={illnessStartDate} onChange={this.handleDateChange} />

          <FormField type="textarea" label="symptoms" {...control(this, 'symptoms')} />

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
