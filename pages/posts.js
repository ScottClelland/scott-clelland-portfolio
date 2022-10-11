import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import mernthumb from '../public/images/contents/mern-thumb.png'
import learnthumb from '../public/images/contents/learn-thumb.png'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Useful videos I have made use of
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem 
                        title="Full Stack MERN Project - Build and Deploy an App | React + Redux, Node, Express, MongoDB" 
                        thumbnail={mernthumb} 
                        href="https://www.youtube.com/watch?v=ngc9gnGgUdA&t=1659s"
                    />
                    <GridItem 
                        title="Learn REACT JS in just 30 MINUTES (2021)" 
                        thumbnail={learnthumb} 
                        href="https://www.youtube.com/watch?v=vIRBSI-elUM"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts