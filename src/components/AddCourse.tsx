import { Button, Flex, Stack, useDisclosure } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import {
  InputControl,
  NumberInputControl,
  SelectControl,
  SubmitButton,
} from "formik-chakra-ui";
import { FC } from "react";
import Modal from "./Modal";

interface IAddCourseProps {}

const AddCourse: FC<IAddCourseProps> = ({}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Modal title="Add Course" isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{ name: "", students: "", type: "" }}
          onSubmit={(values) => {
            console.log(values);
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
                <option value="hard">Full Stack</option>
                <option value="medium">Back End</option>
                <option value="easy">Front End</option>
              </SelectControl>
            </Stack>
            <Flex justify="end">
              <SubmitButton colorScheme="purple">Add Course</SubmitButton>
            </Flex>
          </Form>
        </Formik>
      </Modal>
      <Button onClick={onOpen} mb="4">
        Add Course
      </Button>
    </>
  );
};
export default AddCourse;