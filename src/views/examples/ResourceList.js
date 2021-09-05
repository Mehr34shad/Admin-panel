import React from "react";

import { useSelector } from 'react-redux';
import { Badge, Card, CardHeader, Media, Table, Container, Row} from "reactstrap";
import Header from "components/common/Headers/Header";

const ResourceList = () => {

  const resource = useSelector((state) => state.resource);
  console.log(resource);

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Resource list</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">year</th>
                    <th scope="col">color</th>
                    <th scope="col">pantone</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {resource.map(re => (
                    <tr key={re.id}>
                      <th scope="row">
                        <Media>
                          <span className="mb-0 text-sm">
                            {re.id}
                          </span>
                        </Media>
                      </th>
                      <td>
                        {re.name}
                      </td>
                      <td>
                        {re.year}
                      </td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i style={{ backgroundColor: (re.color) }} />
                          {re.color}
                        </Badge>
                      </td>
                      <td>
                        {re.pantone_value}
                      </td>
                      <td>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
 
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ResourceList;
