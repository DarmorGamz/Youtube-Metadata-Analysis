import * as React from "react";
import {View, Card, Text, Flex, Grid} from "@aws-amplify/ui-react";

export function Content() {
    return (
        <Grid height="86vh" width="85vw" templateColumns={{ base: '1fr 1fr', large: '1fr 1fr 1fr 1fr 1fr' }} templateRows={{ base: 'repeat(4, 10rem)', large: 'repeat(4, 10rem)' }} gap="0.5rem">
            <Card rowSpan={{ base: 1, large: 2 }} columnSpan={{ base: 1, large: 2 }}></Card>
            <Card rowSpan={{ base: 1, large: 2 }} columnSpan={{ base: 1, large: 1 }}></Card>
            <Card rowSpan={{ base: 1, large: 1 }} columnSpan={{ base: 1, large: 2 }}></Card>
            <Card rowSpan={{ base: 1, large: 1 }} columnSpan={{ base: 1, large: 2 }}></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
            {/*<Card></Card>*/}
        </Grid>
    );
}