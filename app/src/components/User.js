import * as React from "react";
import {Card, Text, Button, Flex, useTheme } from "@aws-amplify/ui-react";

export function User({ user, signOut }) {
    const { tokens } = useTheme();

    return (
        <Card width="15vw" display="flex" direction="column" grow="1">
            <Text>Logged in as: </Text>
            <Card padding="1px" marginTop="8px" style={{borderColor: tokens.colors.pink[40], bordersStyle: "solid", borderWidth: "1px" }}>
                <Flex height="100%" direction="row" justifyContent="center" alignItems="center" alignContent="center">
                    <h1><Text><b>{user.username.charAt(0).toUpperCase() + user.username.slice(1)}</b></Text></h1>
                </Flex>
            </Card>
            <Flex flex="1" overflow="auto" direction="column" justifyContent="flex-end" alignItems="center" alignContent="center">
                <Button width="100%" variation='link' onClick={signOut} style={{borderColor: tokens.colors.pink[40], bordersStyle: "solid", borderWidth: "1px" }}>Sign out</Button>
            </Flex>
        </Card>
    );
}