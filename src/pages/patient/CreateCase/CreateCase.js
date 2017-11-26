import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateCase extends Component {
    constructor(props) {
        super(props);
        this.state = {
          patientId: 123,
          nickname: "string",
          illnessStartDate: "Date",
          symptoms: "string",
          note: "string",
          treatments: [
            {
              description: "string",
              media: [
                { id: 123 }
              ]
            }
          ],
          medicine: [
            { id: 123 }
          ]
        }
        }
      }



  render() {
    return (
      <div>
        Create Case







      </div>
    );
  }
}

CreateCase.propTypes = {};
CreateCase.defaultProps = {};

export default CreateCase;
