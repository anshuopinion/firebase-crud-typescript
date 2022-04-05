import { Button, Flex, Icon, Stack, useDisclosure } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import {
  InputControl,
  NumberInputControl,
  SelectControl,
  SubmitButton,
} from "formik-chakra-ui";
import { FC, useState } from "react";
import { FaEdit } from "react-icons/fa";
import Course, { ICourse } from "../Course";
import Modal from "./Modal";

interface IUpdateCourseProps {
  fetchCourse: () => void;
  course: ICourse;
}

const UpdateCourse: FC<IUpdateCourseProps> = ({ fetchCourse, course }) => {
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
            setIsLoading(true);
            try {
              if (course.id) {
                await Course.updateCourse(course.id, {
                  ...values,
                  students: values.students,
                });
              }
            } catch (error) {
              console.log(error);
            } finally {
              setIsLoading(false);
              fetchCourse();
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
              <SelectControl name="type" label="Name">
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