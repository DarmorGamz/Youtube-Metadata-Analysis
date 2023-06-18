import * as React from "react";
import { Card, Text, Flex } from "@aws-amplify/ui-react";

export function Footer() {
    return (
        <Card padding="8px" margin="0">
            <Flex direction="row" justifyContent="center" alignItems="center" alignContent="center">
                <Text>Copyright &copy; DARMOR inc.</Text>
            </Flex>
        </Card>
    );
}