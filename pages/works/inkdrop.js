import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Inkdrop">
            <Container>
                <Title>
                    Dissertation  <Badge>2022</Badge>
                </Title>
                <P>
                    My 4th year dissertation project.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://joyful-travesseiro-3f0e5f.netlify.app/'>
                            https://joyful-travesseiro-3f0e5f.netlify.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, NodeJS, MongoDB</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/log.png" alt="DissLog" />
                <WorkImage src="/images/works/diss.png" alt="DissHome" />
                <WorkImage src="/images/works/create.png" alt="DissCreate" />
                <WorkImage src="/images/works/view.png" alt="DissView" />
                <WorkImage src="/images/works/choices.png" alt="DissChoices" />
            </Container>
        </Layout>
    )
}

export default Work