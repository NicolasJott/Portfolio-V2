import Layout from "@/app/components/layout/Layout";
import { featuredProjects, otherProjects } from "@/data/projectData";
import { Container, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { FeaturedProjects, OtherProjects } from "../components/cards";
import Section from "../components/layout/Section";

export default function Home() {
  return (
    <Layout title={"Projects"}>
      <Container maxW={"90%"} mt={[12, 24]}>
        <Section delay={0.1}>
          <VStack>
            <Heading
              color="white.900"
              textDecoration="underline"
              textUnderlineOffset={5}
              textDecorationColor="primary.900"
              textDecorationThickness="4px"
              mb={24}
              size="xl"
            >
              Featured Projects
            </Heading>
            {featuredProjects(16, "white").map((project, index) => (
              <FeaturedProjects key={index} project={project} />
            ))}
          </VStack>
        </Section>
        <Section delay={0.2}>
          <VStack>
            <Heading
              color="white.900"
              textDecoration="underline"
              textUnderlineOffset={5}
              textDecorationColor="primary.900"
              textDecorationThickness="4px"
              mb={24}
              size="xl"
            >
              Other Projects
            </Heading>
            <SimpleGrid columns={[1, 1, 1, 3, 3, 3, 3]} spacing={4} mb={24}>
              {otherProjects(12, "white").map((project, index) => (
                <OtherProjects key={index} project={project} />
              ))}
            </SimpleGrid>
          </VStack>
        </Section>
      </Container>
    </Layout>
  );
}
