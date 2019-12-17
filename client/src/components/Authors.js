import React  from 'react';
import GET_AUTHORS from '../queries/getAuthors';
import { useQuery } from '@apollo/react-hooks';

import {
  Loader,
  Segment,
  Dimmer,
  Card,
  Container
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Authors() {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (loading) return (
    <Segment>
      <Dimmer active>
        <Loader />
      </Dimmer>
    </Segment>
  );

  if (error) return <p>Error</p>;

  return <Container>
    <Card.Group centered>
      {data.authors.map(({ id, name }) => (
        <Card key={id} as={Link} to={`/authors/${id}`}>
          <Card.Content>
            <Card.Header>{name}</Card.Header>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </Container>
}

export default Authors;
