import * as React from "react";
import { Card, Text, Flex } from "@aws-amplify/ui-react";

export function Navbar() {
    return (
        <Card height="6vh" width="100%" padding="0" margin="0">
            <Flex height="100%" direction="row" justifyContent="center" alignItems="center" alignContent="center">
                <h2><Text>YOUTUBE METADATA</Text></h2>
            </Flex>
        </Card>
    );
}