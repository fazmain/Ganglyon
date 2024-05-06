import React from 'react';
import { useUser } from "./contexts/UserContext";
import { Heading, Text } from "@chakra-ui/react";

const UserWelcome = () => {
    const user = useUser();

    return (
        <div>
            <Heading size="md">Welcome back,</Heading>
            <Heading as="b" size={"xl"} color={"red.500"}>{user.displayName || "User"}!</Heading>
        </div>
    );
};

export default UserWelcome;