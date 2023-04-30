import { Button, Modal, Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { db } from '../firebase-config'
import { doc, setDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
function FormModal(props) {

  const userEmail = props.useremail;
  const exerciseName = props.exercisename;
  const exerciseTime = props.exercisetime;
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('Male');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [age, setAge] = useState(0);
  const [duration, setDuration] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState(0);

  const handleSubmit = async (event) => {
    const data = {
      userEmail: userEmail,
      exerciseName: exerciseName,
      exerciseTime: exerciseTime,
      fullName: fullName,
      address: address,
      gender: gender,
      dateOfJoining: dateOfJoining,
      age: age,
      duration: duration,
      phoneNumber: phoneNumber
    };
    event.preventDefault();
    try {
      await setDoc(doc(db, "joinings", userEmail), data).then(() => {
        toast.success('Joining Successful');
        console.log("Document has been added successfully");
      })
        .catch(error => {
          console.error(error);
          toast.error('Joining Failed');
        })

    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Joining Failed');
    }
    props.onHide()

  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {exerciseName} &nbsp;&nbsp;&nbsp;&nbsp; Timings: {exerciseTime}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => { handleSubmit(e) }}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control value={fullName} onChange={(e) => { setFullName(e.target.value) }} type="text" placeholder="Full Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAge">
              <Form.Label>Age</Form.Label>
              <Form.Control value={age} type="number" onChange={(e) => { setAge(e.target.value) }} placeholder="Age" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridGender">
              <Form.Label>Gender</Form.Label>
              <div key={`inline-radio`} className="mb-3">
                <Form.Check
                  inline
                  label="Male"
                  name="gender"
                  type={'radio'}
                  value={'Male'}
                  onChange={(e) => { setGender(e.target.value) }}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type={'radio'}
                  value={'Female'}
                  onChange={(e) => { setGender(e.target.value) }}
                />
              </div>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control readOnly value={userEmail} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} placeholder="Phone Number" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type='text' value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder="Full Address" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Joining Date</Form.Label>
              <Form.Control onChange={(e) => { setDateOfJoining(e.target.value) }} type='date' placeholder="Joining Date" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPlan">
              <Form.Label>Plan Duration</Form.Label>
              <div key={`inline-radio`} className="mb-3">
                <Form.Check
                  inline
                  label="1-Month"
                  name="planduration"
                  type={'radio'}
                  value={1}
                  onChange={(e) => { setDuration(e.target.value) }}
                />
                <Form.Check
                  inline
                  label="6-Months"
                  name="planduration"
                  type={'radio'}
                  value={6}
                  onChange={(e) => { setDuration(e.target.value) }}
                />
                <Form.Check
                  inline
                  label="12-Months"
                  name="planduration"
                  type={'radio'}
                  value={12}
                  onChange={(e) => { setDuration(e.target.value) }}
                />
              </div>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormModal