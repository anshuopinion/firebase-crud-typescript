import {
  Container,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Course, { ICourse } from "./Course";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddCourse from "./components/AddCourse";
const App = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);

  const fetchCourses = async () => {
    const courses = await Course.getCourses();
    setCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <Heading py="4" bg="purple.800" color="white" textAlign="center">
        Firebase Course Mangement
      </Heading>
      <Container maxW="750px" mt="8">
        <AddCourse fetchCourse={fetchCourses} />
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Students Enrolled</Th>
              <Th>Type</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {courses.map((course) => (
              <Tr key={course.name}>
                <Td>{course.name}</Td>
                <Td>{course.students}</Td>
                <Td>{course.type}</Td>
                <Td>
                  <Flex gap="4">
                    <Icon fontSize="xl">
                      <FaEdit />
                    </Icon>
                    <Icon color="red.300" fontSize="xl">
                      <FaTrash />
                    </Icon>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </>
  );
};

export default App;
