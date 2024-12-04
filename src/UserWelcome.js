import React, { useEffect, useState } from "react";
import { useUser } from "./contexts/UserContext";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import UserProfile from "./UserProfile";
import male from "./assets/avatars/male.gif";
import female from "./assets/avatars/female.gif";

const UserWelcome = () => {
  const user = useUser();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setUserInfo(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserInfo();
  }, [user]);

  console.log(user);

  return (
    <Box py={4} px={0}>
      {userInfo && (
        <UserProfile
          name={user.displayName}
          email={user.email}
          avatar={userInfo.gender === "Male" ? male : female}
          college={userInfo.college}
          profession={userInfo.profession}
        />
      )}
    </Box>
  );
};

export default UserWelcome;
