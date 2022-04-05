import { Heading, List, ListItem, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState();

  return (
    <Stack m="8" p="5" boxShadow="xl">
      <Heading>Name</Heading>
      <List>
        <ListItem>
          <strong>Students Enrolled:</strong> Student
        </ListItem>
        <ListItem>
          <strong>Type:</strong> Type
        </ListItem>
      </List>
    </Stack>
  );
};

export default Course;
