import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment, Dimmer, Loader,
  Grid, Divider, Header, Icon, Search, Button,
  Image, Placeholder, List, Table, Label, Menu } from 'semantic-ui-react';

class App extends Component {
  render() {
    return(
      <Container fluid style={{ padding: '20px'}}>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon>
                <Icon name='search' />
                Cari Document...
              </Header>

              <Search placeholder='Search document...' />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name='file pdf outline' />
                Tambah Document Baru
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>

      <Grid columns={3} stackable>
    <Grid.Column width={5}>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='very long' />
            <Placeholder.Line length='long' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>

    <Grid.Column width={7}>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='very long' />
            <Placeholder.Line length='long' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>

    <Grid.Column width={3}>
    <List>
      <h4>Website Terkait</h4>
      <List.Item>
        <List.Icon name='linkify' />
        <List.Content>
          <a href='http://www.google.com' target='blank'>Google</a>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name='linkify' />
        <List.Content>
          <a href='http://www.Facebook.com' target='blank'>Facebook</a>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name='linkify' />
        <List.Content>
          <a href='http://www.semantic-ui.com' target='blank'>Semantic-ui</a>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name='linkify' />
        <List.Content>
          <a href='http://www.niomic.com' target='blank'>Niomic</a>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name='linkify' />
        <List.Content>
          <a href='http://www.React.com' target='blank'>React</a>
        </List.Content>
      </List.Item>
    </List>
    </Grid.Column>
      </Grid>

      <Grid textAlign='center'>
      <Grid.Column style={{ maxWidth: 1200 }}>
      <Table celled style={{ padding: '10px'}}>

        <Table.Header>
          <Table.Row textAlign='right'>
            <Table.HeaderCell colSpan='2'>
              <Search size='large' placeholder='Search document...' />
            </Table.HeaderCell>
          </Table.Row>

          <Table.Row textAlign='center'>
            <Table.HeaderCell>Nama Document</Table.HeaderCell>
            <Table.HeaderCell>Jenis File</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Label ribbon>Panduan Belajar Javascript</Label>
            </Table.Cell>
            <Table.Cell textAlign='center'>PDF</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Panduan Belajar CSS</Table.Cell>
            <Table.Cell textAlign='center'>PDF</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Panduan Belajar REACT JS</Table.Cell>
            <Table.Cell textAlign='center'>PDF</Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='2'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a' active>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a'>5</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>

      </Table>
      </Grid.Column>
      </Grid>

      </Container>


    )
  }
}

export default App;
