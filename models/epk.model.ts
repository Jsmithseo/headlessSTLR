import { epkData } from "../types/epkTypes";
import { db } from "../config/firebase";
import { _getUserByEmail } from "./user.model";
import { collection, addDoc } from "firebase/firestore";

export async function postEPK(data: epkData) {
  try {
    const docRef = await addDoc(
      collection(db, "electronic-package-kits"),
      data
    );
    return {
      message: "electronic package successfully created",
      docRef: docRef.id,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "electronic package failed to create",
    };
  }
}
