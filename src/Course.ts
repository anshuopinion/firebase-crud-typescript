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
  id?: string;
  name: string;
  students: number;
  type: string;
}

const courseStr = "course";

const courseCollectionRef = collection(db, courseStr);
class Course {
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
      return { ...doc.data(), id: doc.id } as ICourse;
    });
  };

  getCourse = (id: string) => {
    const bookDoc = doc(db, courseStr, id);
    return getDoc(bookDoc);
  };
}

export default new Course();
