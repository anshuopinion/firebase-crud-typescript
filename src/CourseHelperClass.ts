import { db } from "./firestoreConfig";

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

const courseStr = "courses";
const courseCollectionRef = collection(db, courseStr);

class CourseHelperClass {
  getCourses = async () => {
    const { docs } = await getDocs(courseCollectionRef);
    return docs.map((doc) => {
      return { ...doc.data(), id: doc.id } as ICourseDoc;
    });
  };

  addCourse = async (course: ICourse) => {
    return addDoc(courseCollectionRef, course);
  };
  updateCourse = async (id: string, course: ICourse) => {
    const courseDoc = doc(db, courseStr, id);
    return updateDoc(courseDoc, course as any);
  };
  deleteCourse = async (id: string) => {
    const courseDoc = doc(db, courseStr, id);
    return deleteDoc(courseDoc);
  };
  getCourse = async (id: string) => {
    const courseDoc = doc(db, courseStr, id);
    const fetchedDoc = await getDoc(courseDoc);
    return { ...fetchedDoc.data(), id: fetchedDoc.id } as ICourseDoc;
  };
}

export default new CourseHelperClass();
