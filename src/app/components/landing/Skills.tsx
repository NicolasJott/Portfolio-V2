"use client";
import {Box, Heading, HStack, Text, Tooltip, VStack} from "@chakra-ui/react";
import {FaDocker, FaSwift, FaPython, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaAws, FaGithub, FaAppStoreIos, FaAndroid} from "react-icons/fa";
import {
    SiFastapi,
    SiNestjs,
    SiNextdotjs,
    SiPostgresql,
    SiTypescript,
    SiJavascript,
    SiCplusplus,
    SiAstro,
    SiVercel,
    SiChakraui,
    SiExpress,
    SiMysql,
    SiExpo
} from "react-icons/si";
import "swiper/css";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

const languageIcons = (size: number, color: string) => [
    {
        icon: <SiTypescript size={size} color={color}/>,
        name: "TypeScript",
        backgroundColor: "#3178C6",
    },
    {
        icon: <SiJavascript size={size} color={color}/>,
        name: "JavaScript",
        backgroundColor: "#F7DF1E",
    },
    {
        icon: <FaPython size={size} color={color}/>,
        name: "Python",
        backgroundColor: "#3776AB",
    },
    {
        icon: <FaSwift size={size} color={color}/>,
        name: "Swift",
        backgroundColor: "#e68600",
    },
    {
        icon: <FaHtml5 size={size} color={color}/>,
        name: "HTML5",
        backgroundColor: "#E34F26",
    },
    {
        icon: <FaCss3Alt size={size} color={color}/>,
        name: "CSS3",
        backgroundColor: "#1572B6",
    },
    {
        icon: <SiCplusplus size={size} color={color}/>,
        name: "C++",
        backgroundColor: "#00599C",
    },
];

const FrontEndIcons = (size: number, color: string) => [
    {
        icon: <FaReact size={size} color={color}/>,
        name: "React",
        backgroundColor: "#61DAFB",
    },
    {
        icon: <SiNextdotjs size={size} color={color}/>,
        name: "Next.js",
        backgroundColor: "#111111",
    },
    {
        icon: <SiAstro size={size} color={color}/>,
        name: "Astro",
        backgroundColor: "#bc52ee",
    },
    {
        icon: <SiVercel size={size} color={color}/>,
        name: "Vercel",
        backgroundColor: "#111111",
    },
    {
        icon: <SiChakraui size={size} color={color}/>,
        name: "HTML5",
        backgroundColor: "#4FD1C5",
    },
];

const BackEndIcons = (size: number, color: string) => [
    {
        icon: <FaNodeJs size={size} color={color}/>,
        name: "Node.JS",
        backgroundColor: "#61DAFB",
    },
    {
        icon: <SiExpress size={size} color={color}/>,
        name: "Express",
        backgroundColor: "#111111",
    },
    {
        icon: <SiFastapi size={size} color={color}/>,
        name: "FastAPI",
        backgroundColor: "#009688",
    },
    {
        icon: <SiNestjs size={size} color={color}/>,
        name: "NestJS",
        backgroundColor: "#ed1543",
    },
    {
        icon: <SiPostgresql size={size} color={color}/>,
        name: "PostgreSQL",
        backgroundColor: "#336791",
    },
    {
        icon: <SiMysql size={size} color={color}/>,
        name: "MySQL",
        backgroundColor: "#4479A1",
    },
    {
        icon: <FaAws size={size} color={color}/>,
        name: "Amazon Web Services",
        backgroundColor: "#f90",
    },
    {
        icon: <FaDocker size={size} color={color}/>,
        name: "Docker",
        backgroundColor: "#1d63ed",
    },
    {
        icon: <FaGithub size={size} color={color}/>,
        name: "Github",
        backgroundColor: "#111111",
    },
];

const MobileIcons = (size: number, color: string) => [
    {
        icon: <FaReact size={size} color={color}/>,
        name: "React Native",
        backgroundColor: "#61DAFB",
    },
    {
        icon: <SiExpo size={size} color={color}/>,
        name: "Expo",
        backgroundColor: "#111111",
    },
    {
        icon: <FaAppStoreIos size={size} color={color}/>,
        name: "iOS",
        backgroundColor: "#0071e3",
    },
    {
        icon: <FaAndroid size={size} color={color}/>,
        name: "Expo",
        backgroundColor: "#3DDC84",
    },

];

export const Skills = () => {
    return (
        <Box my={24} p={4}>
            <Heading
                color="white.900"
                textDecoration="underline"
                textUnderlineOffset={5}
                textDecorationColor="primary.900"
                textDecorationThickness="4px"
                mb={4}
                size="xl"
            >
                My Skills
            </Heading>
            <VStack my={12} alignItems={"flex-end"} spacing={12}>
                <VStack alignItems={"flex-end"} >

                    <Heading color="white.900"
                             mb={4}
                             size="xl">Languages</Heading>
                    <HStack flexWrap={"wrap"} justifyContent={"flex-end"}>
                        {languageIcons(30, "white").map((iconObj, index) => (
                            <Tooltip key={index} label={iconObj.name} borderRadius={"lg"} bg={iconObj.backgroundColor}>
                                <Box key={index} p={3} bg={iconObj.backgroundColor} borderRadius={"md"}>
                                    {iconObj.icon}
                                </Box>
                            </Tooltip>

                        ))}
                    </HStack>
                </VStack>

                <VStack alignItems={"flex-end"}>
                    <Heading color="white.900"
                             mb={4}
                             size="xl">Frontend</Heading>
                    <HStack flexWrap={"wrap"} justifyContent={"flex-end"}>
                        {FrontEndIcons(30, "white").map((iconObj, index) => (
                            <Tooltip key={index} label={iconObj.name} borderRadius={"lg"} bg={iconObj.backgroundColor}>
                                <Box key={index} p={3} bg={iconObj.backgroundColor} borderRadius={"md"}>
                                    {iconObj.icon}
                                </Box>
                            </Tooltip>

                        ))}
                    </HStack>
                </VStack>

                <VStack alignItems={"flex-end"} >
                    <Heading color="white.900"
                             mb={4}
                             size="xl" >Backend & DevOps</Heading>
                    <HStack flexWrap={"wrap"} justifyContent={"flex-end"}>
                        {BackEndIcons(30, "white").map((iconObj, index) => (
                            <Tooltip key={index} label={iconObj.name} borderRadius={"lg"} bg={iconObj.backgroundColor}>
                                <Box key={index} p={3} bg={iconObj.backgroundColor} borderRadius={"md"}>
                                    {iconObj.icon}
                                </Box>
                            </Tooltip>

                        ))}
                    </HStack>
                </VStack>

                <VStack alignItems={"flex-end"}>
                    <Heading color="white.900"
                             mb={4}
                             size="xl">Mobile</Heading>
                    <HStack flexWrap={"wrap"} justifyContent={"flex-end"}>
                        {MobileIcons(30, "white").map((iconObj, index) => (
                            <Tooltip key={index} label={iconObj.name} borderRadius={"lg"} bg={iconObj.backgroundColor}>
                                <Box key={index} p={3} bg={iconObj.backgroundColor} borderRadius={"md"}>
                                    {iconObj.icon}
                                </Box>
                            </Tooltip>

                        ))}
                    </HStack>
                </VStack>

                {/*<Swiper*/}
                {/*  slidesPerView={4}*/}
                {/*  spaceBetween={24}*/}
                {/*  modules={[Autoplay]}*/}
                {/*  onSlideChange={() => console.log("slide change")}*/}
                {/*  onSwiper={(swiper) => console.log(swiper)}*/}
                {/*  centeredSlides={true}*/}
                {/*  roundLengths={true}*/}
                {/*  loop={true}*/}
                {/*  autoplay*/}
                {/*>*/}
                {/*  {icons(80, "white").map((iconObj, index) => (*/}
                {/*    <SwiperSlide key={index}>*/}
                {/*      <Box>*/}
                {/*        <VStack>*/}
                {/*          {iconObj.icon}*/}
                {/*          <Text size={"sm"} color={"primary.900"}>*/}
                {/*            {iconObj.name}*/}
                {/*          </Text>*/}
                {/*        </VStack>*/}
                {/*      </Box>*/}
                {/*    </SwiperSlide>*/}
                {/*  ))}*/}
                {/*</Swiper>*/}
            </VStack>
        </Box>
    );
};
