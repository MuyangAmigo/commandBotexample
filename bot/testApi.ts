// This file is auto generated by Teams Toolkit to provide you instructions and reference code to call your API.

/*
Next steps:
1. Run npm install. We added the @microsoft/teamsfx to your package.json.
   You need to run the command under the "bot" folder (instead of your project root folder).
2. Add your user password to TEAMSFX_API_TESTAPI_PASSWORD in `bot/.env.teamsfx.local`.

You can import the API client (an Axios instance) in another file and call testApi APIs and authentication is now handled for you automatically.

Here is an example for a GET request to "relative_path_of_target_api":
```
import { testApiClient } from "relative_path_to_this_file";

const response = await testApiClient.get("relative_path_of_target_api");
// You only need to enter the relative path for your API.
// For example, if you want to call api https://my-api-endpoint/test and you configured https://my-api-endpoint as the API endpoint,
// your code will be: const response = await testApiClient.get("test");

const responseBody = response.data;
```

If you added this API while local debugging, stop local debugging and start again because local debugging will not hot reload changes to `.env.teamsfx.local`.

Refer to https://aka.ms/teamsfx-connect-api to learn more. 
*/
import { TeamsFx, createApiClient, BasicAuthProvider } from "@microsoft/teamsfx";

// Load application configuration
const teamsFx = new TeamsFx();
// Initialize a new axios instance to call testApi
const authProvider = new BasicAuthProvider(
  teamsFx.getConfig("TEAMSFX_API_TESTAPI_USERNAME"),
  teamsFx.getConfig("TEAMSFX_API_TESTAPI_PASSWORD")
);
const testApiClient = createApiClient(
  teamsFx.getConfig("TEAMSFX_API_TESTAPI_ENDPOINT"),
  authProvider
);
export { testApiClient };

/* 
Setting API configuration for cloud environment: 
We have set configuration in `.env.teamsfx.local` based on your answers. 
Before you deploy your code to Azure using TeamsFx, follow https://aka.ms/teamsfx-add-appsettings to add the following configuration (with their appropriate values) to your Azure environment: 
TEAMSFX_API_TESTAPI_ENDPOINT
TEAMSFX_API_TESTAPI_USERNAME
TEAMSFX_API_TESTAPI_PASSWORD

Refer to https://aka.ms/teamsfx-connect-api to learn more. 
*/