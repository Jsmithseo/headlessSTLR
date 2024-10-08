import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { UserData } from "../types/userTypes";

// get all users
export async function getAllUsers() {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return users;
  } catch (error) {
    console.log(error);
  }
}

//get user with email
export async function _getUserByEmail(email: string): Promise<UserData> {
  try {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let user: UserData = {
      id: "",
      data: {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
      },
    };

    querySnapshot.forEach((doc) => {
      user = {
        id: doc.id,
        data: doc.data() as UserData["data"],
      };
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}

//create new user
export async function _createNewUser(userData) {
  try {
    const existingUser = await _getUserByEmail(userData.email);
    if (existingUser && existingUser.id) {
      return { error: " User with this email already exists" };
    }
    const docRef = await addDoc(collection(db, "users"), userData);

    return { id: docRef.id, message: "User successfully created" };
  } catch (error) {
    console.log(error);
    return { error: error || "An unexpected error occured" };
  }
}

// edit user
// delete user to come
