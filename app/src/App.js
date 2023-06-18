import * as React from 'react';

import { Navbar } from "components/Navbar"
import { User } from "components/User"
import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { Theme } from "assets/Theme"

import {ThemeProvider, Authenticator, View, Flex, Card, Text, Button} from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
    return (
        <ThemeProvider colorMode='dark' theme={Theme}>
            <Authenticator>
            {({ user, signOut }) => (
                <View style={{ minHeight:"99vh", minWidth:"100vw", display:"flex", direction: "column", overflowX: 'hidden', overflowY: 'hidden' }} padding="0.4rem" backgroundColor={{base:'white'}} >
                    <Flex direction="column" justifyContent="flex-start" alignItems="stretch" alignContent="flex-start" wrap="nowrap" gap="0.2rem">
                        <Navbar/>
                        <Flex direction="row" wrap="nowrap" gap="0.5rem">
                            <User user={user} signOut={signOut}/>
                            <Content/>
                        </Flex>
                        <Footer/>
                    </Flex>
                </View>
            )}
            </Authenticator>
        </ThemeProvider>
    );
}

export default App;


//
// import { Auth, API, graphqlOperation } from 'aws-amplify'
// async function onClick() {
//     // creating a new user in the dynamodb table
//     try {
//         const newYoutubekey = {input: {apiKey: "Test3"}}
//         console.log("Creating new user", newYoutubekey)
//         await API.graphql(graphqlOperation(createYoutubeAPIKey, newYoutubekey))
//     } catch (err) {
//         console.log('Error creating user! :', err)
//     }
//     Auth.currentAuthenticatedUser()
//         .then(user => console.log(user))
//         .catch(err => console.log(err));
// }