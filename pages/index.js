import NextLink from 'next/link'
import { 
    Button,
    Container, 
    Box, 
    Heading, 
    Image, 
    Link,
    List,
    ListItem,
    Icon,
    SimpleGrid,
    useColorModeValue,
    Grid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoTiktok
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.JPG'
import thumbTwitch from '../public/images/links/twitch.JPG'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a graduate developer based in Scotland looking to expand my knowledge in all things software development.
                </Box>

                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Scott Clelland
                        </Heading>
                        <p>
                            University of Strathclyde Graduate
                        </p>
                    </Box>
                    <Box 
                        flexShrink={0} 
                        mt={{base:4, md: 0}} 
                        ml={{md: 6}} 
                        align="center">
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={2} 
                            borderStyle="solid" 
                            maxWidth="100px" 
                            display="inline-block" 
                            borderRadius="full" 
                            src="/images/profile.png" 
                            alt="Profile Image" 
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>Hi my name is Scott Clelland and welcome to my portfolio. Here you get to see the projects 
                        that I have worked on throughout my time at university. I hope you enjoy taking a look at what I 
                        have created. You can find more about my biggest project to date here by viewing my {' '}
                        <NextLink href="/works/inkdrop">
                            <Link>Dissertation</Link>
                        </NextLink>
                        .
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2000</BioYear>
                        Born in Scotland.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Successfully completed my 6th year at Hamilton Grammar high school and achiieved multiple A’s and B’s at higher level.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Graduated from the University of Strathclyde with a 2:1 Bachelors degree in Computer Science.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Life
                    </Heading>
                    <Paragraph>
                        Football, {' '}
                        <Link href="https://fantasy.premierleague.com/">
                            Fantasy Football
                        </Link>
                        , Gym, {' '}
                        <Link href="https://www.youtube.com/channel/UChZwflDZykuT646H7LTwoHA">
                            Youtube, {' '}
                        </Link>
                        <Link href="https://www.twitch.tv/clellandinho">
                            Twitch
                        </Link>
                    </Paragraph>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                    <ListItem>
                            <Link href="https://www.linkedin.com/in/scott-clelland-8757bb1b9/" target="_blank">
                                <Button 
                                    variant="ghost" 
                                    colorScheme="teal" 
                                    leftIcon={<Icon as={IoLogoLinkedin} />}
                                >
                                    LinkedIn
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://gitlab.cis.strath.ac.uk/dashboard/projects" target="_blank">
                                <Button 
                                    variant="ghost" 
                                    colorScheme="teal" 
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    GitLab
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/Clellandinho" target="_blank">
                                <Button 
                                    variant="ghost" 
                                    colorScheme="teal" 
                                    leftIcon={<Icon as={IoLogoTwitter} />}
                                >
                                    Twitter
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/scottclelland/" target="_blank">
                                <Button 
                                    variant="ghost" 
                                    colorScheme="teal" 
                                    leftIcon={<Icon as={IoLogoInstagram} />}
                                >
                                    Instagram
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.tiktok.com/@scottclelland22" target="_blank">
                                <Button 
                                    variant="ghost" 
                                    colorScheme="teal" 
                                    leftIcon={<Icon as={IoLogoTiktok} />}
                                >
                                    Tiktok
                                </Button>
                            </Link>
                        </ListItem>
                    </List>

                    <SimpleGrid columns={[1,2,2]} gap={6}>
                        <GridItem 
                            href="https://www.youtube.com/channel/UChZwflDZykuT646H7LTwoHA" 
                            title="My Youtube" 
                            thumbnail={thumbYouTube}
                        >
                            My Youtube Channel
                        </GridItem>
                        <GridItem 
                            href="https://www.twitch.tv/clellandinho" 
                            title="My Twitch" 
                            thumbnail={thumbTwitch}
                        >
                            My Twitch Channel
                        </GridItem>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page