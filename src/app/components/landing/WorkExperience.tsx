"use client";
import { workExperience } from "@/data/workExperience";
import { Box, Heading, Image } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { JobCard } from "../cards/JobCard";

export const WorkExperience = () => {
  return (
    <Box p={4}>
      <Heading
        color="white.900"
        textDecoration="underline"
        textUnderlineOffset={5}
        textDecorationColor="primary.900"
        textDecorationThickness="4px"
        mb={8}
        size="xl"
      >
        {workExperience.header}
      </Heading>
      <VerticalTimeline
        lineColor="#007BFF"
        layout={"1-column-left"}
        animate={false}
      >
        {workExperience.jobs.map(
          ({ title, company, date, description, img, url }, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "#007BFF", color: "white", boxShadow: "none", borderRadius: "10px" }}
              contentArrowStyle={{ borderRight: "7px solid  #007BFF" }}
              date={date}
              iconStyle={{
                background: "#F5F5F5",
                color: "#F5F5F5",
                width: "48px",
                height: "48px",
                alignItems: "center",
                display: "flex",
              }}
              icon={
                <Box>
                  <Image
                    padding="1px"
                    borderRadius="50%"
                    alt=""
                    background="white"
                    src={img}
                  />
                </Box>
              }
            >
              <JobCard
                title={title}
                company={company}
                description={description}
                url={url}
              />
            </VerticalTimelineElement>
          )
        )}
      </VerticalTimeline>
    </Box>
  );
};
