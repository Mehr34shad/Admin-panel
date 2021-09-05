import React from 'react';
import { Badge, Card, CardHeader, CardFooter, Media, Table, Container, Row, Button } from "reactstrap";
import Header from "components/common/Headers/Header";
import Paginat from 'components/common/Pagination/Paginat';
import { useSelector, useDispatch } from 'react-redux';
import { handleDelete } from './../../actions/users';


const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(users);

  // const handleDeletePerson = (id) => {
  //   const persons = [...users];
  //   const filtredPerson = persons.filter(p => p.id !== id);
  //   users(filtredPerson);

  // }
  // var i = 1;
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">User list</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    {/* <th scope="col">avatar</th> */}
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

                    <tr key={user.id}>
                      <th scope="row">
                        <Media>
                          <span className="mb-0 text-sm">
                            {/* {i} */}
                            {user.id}
                          </span>
                        </Media>
                      </th>
                      <td>{user.first_name}</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          {user.last_name}
                        </Badge>
                      </td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          {user.email}
                        </Badge>
                      </td>
                      <td>
                        <Button
                         onClick={() => dispatch(handleDelete(user.id))}
                          color="danger" size="sm"><i className="fa fa-times"
                          /></Button>
                      </td>
                      <td>
                        <div>
                          <Button color="info" size="sm"><i className="fa fa-pencil-square-o" /></Button>
                        </div>
                      </td>
                      <td>
                        <Media>
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="img"
                              src={user.avatar}
                            />
                          </a>
                        </Media>
                      </td>
                      {/* {i++} */}
                    </tr>
                  
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  {/* Pagination */}
                  <Paginat />
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default UserList;
