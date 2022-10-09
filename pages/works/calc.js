import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Calc">
            <Container>
                <Title>
                    Currency Calculator  <Badge>2020</Badge>
                </Title>
                <P>
                    A currency calculator application that I created for one of my 3rd year assignments.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/iOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>JavaScript, HTML, PHP</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/calc.png" alt="CalcHome" />
            </Container>
        </Layout>
    )
}

export default Work