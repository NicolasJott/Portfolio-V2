import { Container } from "@chakra-ui/react";
import { AboutMe, Landing, Skills, WorkExperience } from "./components/landing";
import Layout from "./components/layout/Layout";
import Section from "./components/layout/Section";

export default function Home() {
  return (
    <Layout>
      <Container maxW={"4xl"} mt={[24, 96]}>
        {/* Landing Section */}
        <Section delay={0.1}>
          <Landing />
        </Section>

        {/* About Me Section */}
        <Section delay={0.2}>
          <AboutMe />
        </Section>

        {/* Work Experience Section */}
        <Section delay={0.3}>
          <Skills />
        </Section>

        {/* Work Experience Section */}
        <Section delay={0.4}>
          <WorkExperience />
        </Section>
      </Container>
    </Layout>
  );
}
