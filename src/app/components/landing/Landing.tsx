"use client"
import {landingData} from "@/data/landingData";
import {Box, Heading, Text} from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';
import {SocialsIcon} from "@/app/components/icons";


export const Landing = () => {
    return (
        <Box my={24} p={4}>

            <Heading
                color="white.900"
                mb={4}
                size="3xl"
            >
                {landingData.header1}
            </Heading>
            <Heading
                color="white.900"
                mb={4}
                size="3xl"
            >
                {landingData.header2}
            </Heading>
            <Heading color="primary.900"
                     mb={4}
                     size="xl">
                <Typewriter
                    options={{
                        strings: landingData.typeWriterText,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Heading>
            <SocialsIcon/>

        </Box>
    );
};
