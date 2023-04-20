<pre>
█▀▀ █ ▀█▀ █▄█ █▀▀ █▀█
█▄▄ █ ░█░ ░█░ █▄█ █▄█
</pre>


To get CityGo running... 
1. Clone the repo 
2. Add your own OpenAI Key
3. npm install

🏆 Submitted to Stanford TreeHacks 2023, won "Most Impactful Hack". Check out the DevPost here: https://devpost.com/software/pedestrian-flow-analysis

### Background
It’s insane how the majority of the U.S. still looks like endless freeways and suburban sprawl. The majority of Americans can’t get a cup of coffee or go to the grocery store without a car.

What would America look like with cleaner air, walkable cities, green spaces, and effective routing from place to place that builds on infrastructure for active transport and micro mobility? This is the question we answer, and show, to urban planners, at an extremely granular street level.

Compared to most of Europe and Asia (where there are public transportation options, human-scale streets, and dense neighborhoods) the United States is light-years away ... but urban planners don’t have the tools right now to easily assess a specific area’s walkability.

Here's why this is an urgent problem: Current tools for urban planners don’t provide location-specific information —they only provide arbitrary, high-level data overviews over a 50-mile or so radius about population density. Even though consumers see new tools, like Google Maps’ area busyness bars, it is only bits and pieces of all the data an urban planner needs, like data on bike paths, bus stops, and the relationships between traffic and pedestrians.

As a result, there’s very few actionable improvements that urban planners can make. Moreover, because cities are physical spaces, planners cannot easily visualize what an improvement (e.g. adding a bike/bus lane, parks, open spaces) would look like in the existing context of that specific road. Many urban planners don’t have the resources or capability to fully immerse themselves in a new city, live like a resident, and understand the problems that residents face on a daily basis that prevent them from accessing public transport, active commutes, or even safe outdoor spaces.

There’s also been a significant rise in micro-mobility—usage of e-bikes (e.g. CityBike rental services) and scooters (especially on college campuses) are growing. Research studies have shown that access to public transport, safe walking areas, and micro mobility all contribute to greater access of opportunity and successful mixed income neighborhoods, which can raise entire generations out of poverty. To continue this movement and translate this into economic mobility, we have to ensure urban developers are making space for car-alternatives in their city planning. This means bike lanes, bus stops, plaza’s, well-lit sidewalks, and green space in the city.

These reasons are why our team created CityGO—a tool that helps urban planners understand their region’s walkability scores down to the granular street intersection level and instantly visualize what a street would look like if it was actually walkable using Open AI's CLIP and DALL-E image generation tools (e.g. “What would the street in front of Painted Ladies look like if there were 2 bike lanes installed?)”

We are extremely intentional about the unseen effects of walkability on social structures, the environments, and public health and we are ecstatic to see the results: 1.Car-alternatives provide economic mobility as they give Americans alternatives to purchasing and maintaining cars that are cumbersome, unreliable, and extremely costly to maintain in dense urban areas. Having lower upfront costs also enables handicapped people, people that can’t drive, and extremely young/old people to have the same access to opportunity and continue living high quality lives. This disproportionately benefits people in poverty, as children with access to public transport or farther walking routes also gain access to better education, food sources, and can meet friends/share the resources of other neighborhoods which can have the huge impact of pulling communities out of poverty.

Placing bicycle lanes and barriers that protect cyclists from side traffic will encourage people to utilize micro mobility and active transport options. This is not possible if urban planners don’t know where existing transport is or even recognize the outsized impact of increased bike lanes.

Finally, it’s no surprise that transportation as a sector alone leads to 27% of carbon emissions (US EPA) and is a massive safety issue that all citizens face everyday. Our country’s dependence on cars has been leading to deeper issues that affect basic safety, climate change, and economic mobility. The faster that we take steps to mitigate this dependence, the more sustainable our lifestyles and Earth can be.

### What it does
TLDR: 1) Map that pulls together data on car traffic and congestion, pedestrian foot traffic, and bike parking opportunities. Heat maps that represent the density of foot traffic and location-specific interactive markers. 2) Google Map Street View API enables urban planners to see and move through live imagery of their site. 3) OpenAI CLIP and DALL-E are used to incorporate an uploaded image (taken from StreetView) and descriptor text embeddings to accurately provide a hyper location-specific augmented image.

The exact street venues that are unwalkable in a city are extremely difficult to pinpoint. There’s an insane amount of data that you have to consolidate to get a cohesive image of a city’s walkability state at every point—from car traffic congestion, pedestrian foot traffic, bike parking, and more.

Because cohesive data collection is extremely important to produce a well-nuanced understanding of a place’s walkability, our team incorporated a mix of geoJSON data formats and vector tiles (specific to MapBox API). There was a significant amount of unexpected “data wrangling” that came from this project since multiple formats from various sources had to be integrated with existing mapping software—however, it was a great exposure to real issues data analysts and urban planners have when trying to work with data.

There are three primary layers to our mapping software: traffic congestion, pedestrian traffic, and bicycle parking.

In order to get the exact traffic congestion per street, avenue, and boulevard in San Francisco, we utilized a data layer in MapBox API. We specified all possible locations within SF and made requests for geoJSON data that is represented through each Marker. Green stands for low congestion, yellow stands for average congestion, and red stands for high congestion. This data layer was classified as a vector tile in MapBox API.

Consolidating pedestrian foot traffic data was an interesting task to handle since this data is heavily locked in enterprise software tools. There are existing open source data sets that are posted by regional governments, but none of them are specific enough that they can produce 20+ or so heat maps of high foot traffic areas in a 15 mile radius. Thus, we utilized Best Time API to index for a diverse range of locations (e.g. restaurants, bars, activities, tourist spots, etc.) so our heat maps would not be biased towards a certain style of venue to capture information relevant to all audiences. We then cross-validated that data with Walk Score (the most trusted site for gaining walkability scores on specific addresses). We then ranked these areas and rendered heat maps on MapBox to showcase density.

San Francisco’s government open sources extremely useful data on all of the locations for bike parking installed in the past few years. We ensured that the data has been well maintained and preserved its quality over the past few years so we don’t over/underrepresent certain areas more than others. This was enforced by recent updates in the past 2 months that deemed the data accurate, so we added the geographic data as a new layer on our app. Each bike parking spot installed by the SF government is represented by a little bike icon on the map!

The most valuable feature is the user can navigate to any location and prompt CityGo to produce a hyper realistic augmented image resembling that location with added infrastructure improvements to make the area more walkable. Seeing the StreetView of that location, which you can move around and see real time information, and being able to envision the end product is the final bridge to an urban developer’s planning process, ensuring that walkability is within our near future.

### How we built it
We utilized the React framework to organize our project’s state variables, components, and state transfer. We also used it to build custom components, like the one that conditionally renders a live panoramic street view of the given location or render information retrieved from various data entry points.

To create the map on the left, our team used MapBox’s API to style the map and integrate the heat map visualizations with existing data sources. In order to create the markers that corresponded to specific geometric coordinates, we utilized Mapbox GL JS (their specific Javascript library) and third-party React libraries.

To create the Google Maps Panoramic Street View, we integrated our backend geometric coordinates to Google Maps’ API so there could be an individual rendering of each location. We supplemented this with third party React libraries for better error handling, feasibility, and visual appeal. The panoramic street view was extremely important for us to include this because urban planners need context on spatial configurations to develop designs that integrate well into the existing communities.

We created a custom function and used the required HTTP route (in PHP) to grab data from the Walk Score API with our JSON server so it could provide specific Walkability Scores for every marker in our map.

Text Generation from OpenAI’s text completion API was used to produce location-specific suggestions on walkability. Whatever marker a user clicked, the address was plugged in as a variable to a prompt that lists out 5 suggestions that are specific to that place within a 500-feet radius. This process opened us to the difficulties and rewarding aspects of prompt engineering, enabling us to get more actionable and location-specific than the generic alternative.

Additionally, we give the user the option to generate a potential view of the area with optimal walkability conditions using a variety of OpenAI models. We have created our own API using the Flask API development framework for Google Street View analysis and optimal scene generation.

Here’s how we were able to get true image generation to work: When the user prompts the website for a more walkable version of the current location, we grab an image of the Google Street View and implement our own architecture using OpenAI contrastive language-image pre-training (CLIP) image and text encoders to encode both the image and a variety of potential descriptions describing the traffic, use of public transport, and pedestrian walkways present within the image. The outputted embeddings for both the image and the bodies of text were then compared with each other using scaled cosine similarity to output similarity scores. We then tag the image with the necessary descriptors, like classifiers,—this is our way of making the system understand the semantic meaning behind the image and prompt potential changes based on very specific street views (e.g. the Painted Ladies in San Francisco might have a high walkability score via the Walk Score API, but could potentially need larger sidewalks to further improve transport and the ability to travel in that region of SF). This is significantly more accurate than simply using DALL-E’s set image generation parameters with an unspecific prompt based purely on the walkability score because we are incorporating both the uploaded image for context and descriptor text embeddings to accurately provide a hyper location-specific augmented image.

A descriptive prompt is constructed from this semantic image analysis and fed into DALLE, a diffusion based image generation model conditioned on textual descriptors. The resulting images are higher quality, as they preserve structural integrity to resemble the real world, and effectively implement the necessary changes to make specific locations optimal for travel.

We used Tailwind CSS to style our components.

### Challenges we ran into
There were existing data bottlenecks, especially with getting accurate, granular, pedestrian foot traffic data.

The main challenge we ran into was integrating the necessary Open AI models + API routes. Creating a fast, seamless pipeline that provided the user with as much mobility and autonomy as possible required that we make use of not just the Walk Score API, but also map and geographical information from maps + google street view.

Processing both image and textual information pushed us to explore using the CLIP pre-trained text and image encoders to create semantically rich embeddings which can be used to relate ideas and objects present within the image to textual descriptions.

Accomplishments that we're proud of
We could have done just normal image generation but we were able to detect car, people, and public transit concentration existing in an image, assign that to a numerical score, and then match that with a hyper-specific prompt that was generating an image based off of that information. This enabled us to make our own metrics for a given scene; we wonder how this model can be used in the real world to speed up or completely automate the data collection pipeline for local governments.

### What we learned and what's next for CityGO
Utilizing multiple data formats and sources to cohesively show up in the map + provide accurate suggestions for walkability improvement was important to us because data is the backbone for this idea. Properly processing the right pieces of data at the right step in the system process and presenting the proper results to the user was of utmost importance. We definitely learned a lot about keeping data lightweight, easily transferring between third-party softwares, and finding relationships between different types of data to synthesize a proper output.

We also learned quite a bit by implementing Open AI’s CLIP image and text encoders for semantic tagging of images with specific textual descriptions describing car, public transit, and people/people crosswalk concentrations. It was important for us to plan out a system architecture that effectively utilized advanced technologies for a seamless end-to-end pipeline. We learned about how information abstraction (i.e. converting between images and text and finding relationships between them via embeddings) can play to our advantage and utilizing different artificially intelligent models for intermediate processing.

In the future, we plan on integrating a better visualization tool to produce more realistic renders and introduce an inpainting feature so that users have the freedom to select a specific view on street view and be given recommendations + implement very specific changes incrementally. We hope that this will allow urban planners to more effectively implement design changes to urban spaces by receiving an immediate visual + seeing how a specific change seamlessly integrates with the rest of the environment.

Additionally we hope to do a neural radiance field (NERF) integration with the produced “optimal” scenes to give the user the freedom to navigate through the environment within the NERF to visualize the change (e.g. adding a bike lane or expanding a sidewalk or shifting the build site for a building). A potential virtual reality platform would provide an immersive experience for urban planners to effectively receive AI-powered layout recommendations and instantly visualize them.

Our ultimate goal is to integrate an asset library and use NERF-based 3D asset generation to allow planners to generate realistic and interactive 3D renders of locations with AI-assisted changes to improve walkability. One end-to-end pipeline for visualizing an area, identifying potential changes, visualizing said changes using image generation + 3D scene editing/construction, and quickly iterating through different design cycles to create an optimal solution for a specific locations’ walkability as efficiently as possible!
