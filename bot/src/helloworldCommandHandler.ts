import { Activity, TurnContext } from "botbuilder";
import {
  CommandMessage,
  TeamsFxBotCommandHandler,
  TriggerPatterns,
  MessageBuilder,
} from "@microsoft/teamsfx";
import helloWorldCard from "./adaptiveCards/helloworldCommand.json";
import { CardData } from "./cardModels";

import { testApiClient } from "../testApi";



/**
 * The `HelloWorldCommandHandler` registers a pattern with the `TeamsFxBotCommandHandler` and responds
 * with an Adaptive Card if the user types the `triggerPatterns`.
 */
export class HelloWorldCommandHandler implements TeamsFxBotCommandHandler {

  triggerPatterns: TriggerPatterns = "helloWorld";

  async handleCommandReceived(
    context: TurnContext,
    message: CommandMessage
  ): Promise<string | Partial<Activity> | void> {

    console.log(`Bot received message: ${message.text}`);

    const response = await testApiClient.get("https://chyuantestapi.azurewebsites.net/basic");
    // console.log(response)
    // You only need to enter the relative path for your API.
    // For example, if you want to call api https://my-api-endpoint/test and you configured https://my-api-endpoint as the API endpoint,
    // your code will be: const response = await testApiClient.get("test");
    
    const responseBody = response.data;
    console.log(responseBody)

    // Render your adaptive card for reply messagehttps://chyuantestapi.azurewebsites.net/basic
    const cardData: CardData = {
      title: "Your Hello World Bot is Running",
      body: "Congratulations! Your hello world bot is running. Click the documentation below to learn more about Bots and the Teams Toolkit.",
      imageUrl: "https://images.prismic.io/sketchplanations/62e61034-b66a-4ede-a5db-a5cbc39d55e7_SP+587+-+The+Pomodoro+technique.jpg?auto=format&ixlib=react-9.0.3&h=1887.557603686636&w=1600&q=75&dpr=1",
      apiResponse: responseBody,
    };

    return MessageBuilder.attachAdaptiveCard<CardData>(helloWorldCard, cardData);
  }
}
