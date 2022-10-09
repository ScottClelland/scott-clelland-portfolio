import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Art">
            <Container>
                <Title>
                    Art Marketplace  <Badge>2020</Badge>
                </Title>
                <P>
                    A virtual art marketplace website that I created for one of my 3rd year assignments.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>JavaScript, HTML, PHP</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/art.png" alt="ArtHome" />
                <WorkImage src="/images/works/listing.png" alt="ArtListing" />
                <WorkImage src="/images/works/order.png" alt="ArtOrder" />
                <WorkImage src="/images/works/appointment.png" alt="ArtAppoint" />
            </Container>
        </Layout>
    )
}

export default Work