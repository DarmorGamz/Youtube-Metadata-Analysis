import * as React from "react";
import { Card, Text, Flex } from "@aws-amplify/ui-react";

export function Footer() {
    return (
        <Card height="4vh" width="100%">
            <Flex height="100%" direction="row" justifyContent="center" alignItems="center" alignContent="center">
                <Text>Copyright &copy; DARMOR inc.</Text>
            </Flex>
        </Card>
    );
}