import { db } from "./firbaseConfig";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export interface ICourse {
  name: string;
  students: number;
  type: string;
}
export interface ICourseDoc extends ICourse {
  id: string;
}

const courseStr = "course";

const courseCollectionRef = collection(db, courseStr);
class CourseHelperClass {
  addCourse = (course: ICourse) => {
    return addDoc(courseCollectionRef, course);
  };
  updateCourse = (id: string, course: ICourse) => {
    const bookDoc = doc(db, courseStr, id);
    return updateDoc(bookDoc, course as any);
  };
  deleteCourse = (id: string) => {
    const bookDoc = doc(db, courseStr, id);
    return deleteDoc(bookDoc);
  };

  getCourses = async () => {
    const { docs } = await getDocs(courseCollectionRef);

    return docs.map((doc) => {
      return { ...doc.data(), id: doc.id } as ICourseDoc;
    });
  };

  getCourse = async (id: string) => {
    const bookDoc = doc(db, courseStr, id);
    const fetchedDoc = await getDoc(bookDoc);
    return { ...fetchedDoc.data(), id: fetchedDoc.id } as ICourseDoc;
  };
}

export default new CourseHelperClass();
