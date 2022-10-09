import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem 
                        title="Twitch Highlights: I forgot to mute myself in Among Us..." 
                        thumbnail={"/images/contents/Unmute-Thumbnail.png"} 
                        href="https://www.youtube.com/watch?v=pVRmvhUI-4M&t=2s"
                    />
                    <GridItem 
                        title="Twitch Highlights: Warzone Funny Moments - Playing with the World's Best Teammate" 
                        thumbnail={"/images/contents/Afaan-Thumbnail.png"} 
                        href="https://www.youtube.com/watch?v=FWL9owhN4YY"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts