import * as React from "react";
import {View, Card, Text, Flex, Grid} from "@aws-amplify/ui-react";

export function Content() {
    return (
            <Grid style={{ overflowX: 'auto',overflowY: 'auto' }} width="84vw" height="88vh" templateColumns={{ base: '1fr 1fr', large: '1fr 1fr 1fr 1fr 1fr' }} templateRows={{ base: 'repeat(5, 10rem)', large: 'repeat(10, 9.8rem)' }} gap="0.5rem">
                <Card rowSpan={{ base: 1, large: 2 }} columnSpan={{ base: 1, large: 2 }}>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                </Card>
                <Card rowSpan={{ base: 1, large: 2 }} columnSpan={{ base: 1, large: 1 }}>
                    <Text>Test</Text>
                </Card>
                <Card rowSpan={{ base: 1, large: 1 }} columnSpan={{ base: 1, large: 2 }}>
                    <Text>Test</Text>
                </Card>
                <Card rowSpan={{ base: 1, large: 1 }} columnSpan={{ base: 1, large: 2 }}>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                </Card>
                <Card rowSpan={{ base: 1, large: 2 }} columnSpan={{ base: 1, large: 1 }}>
                    <Text>Test</Text>
                </Card>
                <Card rowSpan={{ base: 1, large: 2 }} columnSpan={{ base: 1, large: 1 }}>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                </Card>

                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card rowSpan={{ base: 1, large: 1 }} columnSpan={{ base: 1, large: 2 }}></Card>
                <Card></Card>
                <Card rowSpan={{ base: 1, large: 1 }} columnSpan={{ base: 1, large: 2 }}></Card>
                <Card rowSpan={{ base: 1, large: 2 }} columnSpan={{ base: 1, large: 2 }}></Card>
                <Card rowSpan={{ base: 1, large: 2 }} columnSpan={{ base: 1, large: 1 }}></Card>
                <Card rowSpan={{ base: 1, large: 1 }} columnSpan={{ base: 1, large: 2 }}></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

        </Grid>
    );
}