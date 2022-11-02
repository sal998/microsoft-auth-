/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React,{useState,useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props 
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();
    // const [TopicsDatas,setTopicsDatas]= useState([])
    // console.log(TopicsDatas,"topics")

    // useEffect(() => {
    //     fetchData();
    //   }, []);

    // const fetchData = () => {
    //     const url =
    //       "https://ilinkvideoplayerapi-dotnet.azurewebsites.net/api/TopicsDatas";
    //       const apiOptions = {
    //         headers: {
    //           Authorization:
    //             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJhcGk6Ly80YjlhY2YxMi1lODNmLTRiMWEtOWFkMi1jOGViMTg4NThmNjUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9hOGU1ZDU3MS00M2U4LTRjM2MtOTZiZS0zNDQxNTZjZjY4ODcvIiwiaWF0IjoxNjY2OTYyNzU2LCJuYmYiOjE2NjY5NjI3NTYsImV4cCI6MTY2Njk2NzM1MywiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQXk0cUhIVzdtM1ZERFpsTHlIZTczVE5tUk5PYmQ2R3JORGNYdi9qTHEwSTN0bFY5c3dMWHpFcGxRQ2FXWlJ6UmsiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiOGFhYzNmYjgtN2E5OS00MzQwLWE0OGUtYjVhZDJmNTJmM2Y1IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNZW1vbiIsImdpdmVuX25hbWUiOiJTYWxtYW4iLCJpcGFkZHIiOiIxNTIuNTcuMTI1LjM1IiwibmFtZSI6IlNhbG1hbiBNZW1vbiIsIm9pZCI6ImRhN2NiNmVlLTMwNWItNDAwYy1iNTg3LWI4NzA3MzkyMGJiNiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0xMjgwMDA2MDI2LTI4NTQwOTU4NzktMzYwMjYwMDc3Ny0yMzkyMyIsInJoIjoiMC5BUklBY2RYbHFPaERQRXlXdmpSQlZzOW9oeExQbWtzXzZCcExtdExJNnhpRmoyVVNBQlkuIiwic2NwIjoiYXBpLnNjb3BlMSIsInN1YiI6IldjVnVGLWwyUVdiNTg4Q184N2xqc0dncjlwcFpVVHBucTVCbkxQYTRlM1kiLCJ0aWQiOiJhOGU1ZDU3MS00M2U4LTRjM2MtOTZiZS0zNDQxNTZjZjY4ODciLCJ1bmlxdWVfbmFtZSI6IlNhbG1hbi5tZW1vbkBpbGluay1zeXN0ZW1zLmNvbSIsInVwbiI6IlNhbG1hbi5tZW1vbkBpbGluay1zeXN0ZW1zLmNvbSIsInV0aSI6InlkTXJ0TldISWtpTHpJZ1p1ME9aQUEiLCJ2ZXIiOiIxLjAifQ.I7HQmPwZeYDN3FzInX7i8VLAaqOdPVtW6kTqwxI_ZG4sJbEMatds1Pjl_OZS2TQvYWlRY-W7CXqcE7wRp5xrh52ogTWTGuvyCHqDhToS0ias0yg1lK1_RLaakhNzH-6iac8Iqty5pxninr9w6jPbdyKj6KtIJZWjODGltAebB_vqvXzfeigdPCF1BdL0xugu6bBpGg3CfgshRLh8TVZEYO9O4bvzmOpd8V6WfxVp_flH2gFEz2j4n8-YSqC5rTgmO6YnMsJ0Yz9IKXyEaI1tk8hO1WHrcynTGXqvtxg0xH4AnzoGKqKmvUQcwd_xtchJ_75qF92xQE7Rkis5mSQ_fA",
    //         },
    //       };
    //     fetch(url,apiOptions)
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    //         setTopicsDatas(responseJson);
           
    //       })
    //       .catch((error) => {
            
    //         console.error(error, "in error message");
    //       });
    //   };

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">Microsoft Identity Platform</a>
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
            </Navbar>
            <h5><center>Welcome to the Microsoft Authentication Library For Javascript - React Quickstart</center></h5>
            <br />
            <br />
            {props.children}
        </>
    );
};
