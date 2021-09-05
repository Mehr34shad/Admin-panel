import React from "react";
import Header from "components/common/Headers/Header";
import { Button, Card, CardHeader, Table, Container, Row, Col, Form, FormGroup, Input, Media } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { handleDelete } from "actions/users";



const CreateNewUser = (props) => {

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(users);

  return (
    <>
      <Header />
      <Container className="mt-5 mb-7">
        <Form onClick={(e) => e.preventDefault()}>
          <Row>
            <Col md="6">
              <FormGroup>
                <Input
                  placeholder="id"
                  type="number"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  placeholder="Name"
                  type="text"
                  // onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  placeholder="Surname"
                  type="text"
                  // onChange={(e) => setSurname(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  placeholder="email"
                  type="email"
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button
            className="input-group-prepend mb-3"
            color="primary"
            size="sm"
          // onClick={(e) => e.preventDefault()}
          // onClick={() => dispatch(handleDelete(user.id))}
          >
            <i className="fa fa-plus" aria-hidden="true"></i></Button>
        </Form>
      </Container>

      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">create new user</h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">surname</th>
                    <th scope="col">email</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Edit</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr>
                      <th scope="row">{user.id}</th>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>
                        {user.email}
                      </td>
                      <td>
                        <Button
                          //  onClick={() => dispatch(handleDelete(user.id))}
                          color="danger" size="sm"><i className="fa fa-times"
                            // onClick={() => dispatch(handleDelete(user.id))}
                          /></Button>
                      </td>
                      <td>
                        <div>
                          <Button color="info" size="sm"><i className="fa fa-pencil-square-o" /></Button>
                        </div>
                      </td>
                      <td>
                        <Media className="avatar rounded-circle mr-3">
                          <img
                            alt="img"
                            src={user.avatar}
                          />
                        </Media>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateNewUser;
