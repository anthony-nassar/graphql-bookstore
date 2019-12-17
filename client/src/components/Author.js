import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_AUTHOR from '../queries/getAuthor';

import {
  Segment,
  Dimmer,
  Loader,
  Container,
  Header,
  Card,
  Button
} from 'semantic-ui-react';

function Author({match, history}) {
  const { id } = match.params;
  const { loading, error, data } = useQuery(GET_AUTHOR, { variables: { id } });

    if (loading) return(
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>
      </Segment>
    );

  if (error) return <p>{error}</p>;

  const { name, age, books } = data.author;

  return (
    <Container>
      <Button onClick={history.goBack}>Back</Button>
      <Header as='h1'>{name}</Header>
      <Header>Age: {age}</Header>
      <Card.Group centered>
        {
          books.map(({ id, title, genre }) => (
            <Card key={id}>
              <Card.Content>
                <Card.Header>{title}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Card.Description>{genre}</Card.Description>
              </Card.Content>
            </Card>
          ))
        }
      </Card.Group>
    </Container>
  );
}
export default Author;
