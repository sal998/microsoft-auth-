import React, { useEffect,useState} from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { PageLayout } from "./components/PageLayout";
import { ProfileData } from "./components/ProfileData";
import { callMsGraph } from "./graph";
import Button from "react-bootstrap/Button";
import "./styles/App.css";

/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
const ProfileContent = () => {
    const [TopicsDatas,setTopicsDatas]= useState([])
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);
    console.log(TopicsDatas,"in graphdata")

    function RequestProfileData() {
        // Silently acquires an access token which is then attached to a request for MS Graph data
        instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0]
        }).then((response) => {
            callMsGraph(response.accessToken).then(response => setTopicsDatas(response));
        });
    }

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
            <h5 className="card-title">Welcome {accounts[0].name}</h5>
            {graphData ? 
                <ProfileData graphData={graphData} />
                :
                <Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>
            }
        </>
    );
};

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
const MainContent = () => {    
    return (
        <div className="App">
            <AuthenticatedTemplate>
                <ProfileContent />
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <h5 className="card-title">Please sign-in to see your profile information.</h5>
            </UnauthenticatedTemplate>
        </div>
    );
};

export default function App() {
    return (
        <PageLayout>
            <MainContent />
        </PageLayout>
    );
}
