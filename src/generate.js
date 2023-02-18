import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function generate(location) {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(location.Title),
      temperature: 0.6,
      max_tokens: 256,
    });
    const result = completion.data.choices[0].text;
    return result;
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
  return "";
}

function generatePrompt(location) {
  const capitalizedLocation =
    location.toUpperCase() + location.slice(1).toLowerCase();
  return `Give me 5 suggestions if i was an urban planner to make the area around ${capitalizedLocation}, San Francisco better in terms of walkability, safety around cars, and pedestrianizing streets. give me suggestions that are specific to the city planning in a 500 feet radius around ${capitalizedLocation}. Use specific street names, avenues, areas that are specific to ${capitalizedLocation} when giving suggestions, and do not give generalized suggestions that can be applied to all of California. It is incredibly important that you incorporate statistics of foot traffic, car congestion in that area, such as noting places with extremely high foot traffic or low foot traffic.`;
}
