import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import diss from '../public/images/works/diss.png'
import art from '../public/images/works/art.png'
import calc from '../public/images/works/calc.png'
import Layout from '../components/layouts/article'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.1}>
                        <WorkGridItem id="inkdrop" title="Dissertation" thumbnail={diss}>
                            My 4th year dissertation project where I was tasked with developing
                            a web application that allows students to choose and recieve their
                            final year projects
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem id="art" title="Art Marketplace" thumbnail={art}>
                            This project was a 3rd year university project where I was tasked to create
                            a virtual art marketplace where the artist could list and sell their art to potential 
                            customers. Also allowed customers to book appointments.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="calc" title="Currency Calculator" thumbnail={calc}>
                            This project was a 3rd year university project where I was tasked to create
                            a calculator that could convert any currency to any other currency.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works