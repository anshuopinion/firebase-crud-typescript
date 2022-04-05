import { Heading, List, ListItem, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseHelperClass, { ICourseDoc } from "../CourseHelperClass";

const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<ICourseDoc>();
  const fetchCourse = async () => {
    if (id) {
      const course = await CourseHelperClass.getCourse(id);
      setCourse(course);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <Stack m="8" p="5" boxShadow="xl">
      <Heading>{course?.name}</Heading>
      <List>
        <ListItem>
          <strong>Students Enrolled:</strong> {course?.students}
        </ListItem>
        <ListItem>
          <strong>Type:</strong> {course?.type}
        </ListItem>
      </List>
    </Stack>
  );
};

export default Course;
