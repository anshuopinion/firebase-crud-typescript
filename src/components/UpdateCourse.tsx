import { Flex, Icon, Stack, useDisclosure } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import {
  InputControl,
  NumberInputControl,
  SelectControl,
  SubmitButton,
} from "formik-chakra-ui";
import { FC, useState } from "react";
import { FaEdit } from "react-icons/fa";
import CourseHelperClass, { ICourseDoc } from "../CourseHelperClass";

import Modal from "./Modal";

interface IUpdateCourseProps {
  course: ICourseDoc;
  fetchCourses: () => void;
}

const UpdateCourse: FC<IUpdateCourseProps> = ({ course, fetchCourses }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Modal title="Update Course" isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name: course.name,
            students: course.students,
            type: course.type,
          }}
          onSubmit={async (values) => {
            try {
              setIsLoading(true);
              await CourseHelperClass.updateCourse(course.id, {
                name: values.name,
                students: values.students,
                type: values.type,
              });
            } catch (error) {
              console.log(error);
              alert(error);
            } finally {
              setIsLoading(false);
              fetchCourses();
              onClose();
            }
          }}
        >
          <Form>
            <Stack py="4">
              <InputControl
                name="name"
                label="Course Name"
                inputProps={{ placeholder: "Enter  Course Name" }}
              />
              <NumberInputControl
                name="students"
                label="Students Enrolled"
                helperText="Enter Number of Students"
              />
              <SelectControl name="type" label="Course Type">
                <option value="">Select a course type</option>
                <option value="hard">Hard</option>
                <option value="medium">Medium</option>
                <option value="easy">Easy</option>
              </SelectControl>
            </Stack>
            <Flex justify="end">
              <SubmitButton isLoading={isLoading} colorScheme="purple">
                Update Course
              </SubmitButton>
            </Flex>
          </Form>
        </Formik>
      </Modal>
      <Icon onClick={onOpen} fontSize="xl">
        <FaEdit />
      </Icon>
    </>
  );
};
export default UpdateCourse;
