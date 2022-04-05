import {
  Badge,
  Container,
  Flex,
  Heading,
  Icon,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import AddCourse from "../components/AddCourse";
import UpdateCourse from "../components/UpdateCourse";
import { useNavigate } from "react-router-dom";
import { SiFirebase } from "react-icons/si";
import CourseHelperClass, { ICourseDoc } from "../CourseHelperClass";
const Home = () => {
  const [courses, setCourses] = useState<ICourseDoc[]>([]);
  const navigate = useNavigate();

  const fetchCourses = async () => {
    const courses = await CourseHelperClass.getCourses();
    setCourses(courses);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const deleteCourseHandler = async (id: string) => {
    await CourseHelperClass.deleteCourse(id);
    fetchCourses();
  };

  return (
    <>
      <Flex py="4" bg="purple.800" justify="center" align="center" gap="4">
        <SiFirebase fontSize="50px" color="white" />{" "}
        <Heading
          fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
          color="white"
        >
          Firebase Basic v9 CRUD Operations
        </Heading>
      </Flex>
      <Container maxW="container.lg" mt="8">
        <AddCourse fetchCourses={fetchCourses} />
        <TableContainer>
          <Table variant="striped" colorScheme="purple">
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
                <Tr key={course.id}>
                  <Td>{course.name}</Td>
                  <Td>{course.students}</Td>
                  <Td>
                    <Badge
                      colorScheme={
                        course.type === "easy"
                          ? "green"
                          : course.type === "medium"
                          ? "blue"
                          : "red"
                      }
                    >
                      {course.type}
                    </Badge>
                  </Td>
                  <Td>
                    <Flex gap="4">
                      <Icon
                        cursor="pointer"
                        onClick={() => navigate(`/course/${course.id}`)}
                        fontSize="xl"
                      >
                        <FaEye />
                      </Icon>
                      <UpdateCourse
                        fetchCourses={fetchCourses}
                        course={course}
                      />
                      <Icon
                        onClick={() => deleteCourseHandler(course.id)}
                        _hover={{ color: "red.500" }}
                        color="red.300"
                        fontSize="xl"
                      >
                        <FaTrash />
                      </Icon>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Home;
