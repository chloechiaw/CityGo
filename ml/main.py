import os
import clip
from PIL import Image
import torch
from flask import Flask, request
import openai


openai.api_key = "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"

app = Flask(__name__)

@app.route('/main', methods=['POST'])
def main():
    place_name = request.args.get('place')

    data = request.files['file']

    device = "cpu"


    car_spectrum = ["A street that is packed with cars, automobiles, trucks and vans which is crowding the area and preventing walkability.", "A street with many cars taking up many lanes of space with not many humans around.", "Has little cars as well as buses, bike lanes, bus stops, and sidewalks where some people are walking and standing.", "Has no traffic congestion and is filled with people who are safely walking the streets.", "People are happy and do not have to stress because there are not many cars or traffic congestion on these roads."]

    pedestrian_space = ["There is no sidewalk space, there are no bike lanes, and there are no bus stops; as a result, there are barely any people outside and lots of traffic congestion.", "The sidewalk space is limited and not very safe to walk in, but there are still some people able to walk.", "The sidewalks are large and expansive, with lots of greenery and nature, and there is a lot of space for groups of people to walk safely."]

    public_transit = ["There are no places for public transport, scooters, bike lanes, or bus stops in the area; there is a lot of traffic and car congestion and emission.", "The streets have a lot of cars, but there is also a bike line and sidewalks for people to go through.", "The streets do not take up all of the space on the roads, and there is ample room for people to bike, walk, scooter, and take the bus.", "The sidewalks are huge, there are many people walking on the streets and biking or riding scooters, there is little traffic congestion."]


    model, preprocess = clip.load("ViT-B/32", device=device)

    image = preprocess(Image.open(data)).unsqueeze(0).to(device)

    car_text = clip.tokenize(car_spectrum).to(device)
    ped_text = clip.tokenize(pedestrian_space).to(device)
    public_text = clip.tokenize(public_transit).to(device)

    with torch.no_grad():
        image_features = model.encode_image(image)

        text_features1 = model.encode_text(car_text)
        text_features2 = model.encode_text(ped_text)
        text_features3 = model.encode_text(public_text)
        
        logits_per_image, logits_per_text = model(image, car_text)
        car_probs = logits_per_image.softmax(dim=-1).cpu().numpy()
        car_score = len(car_spectrum)-list(car_probs[0]).index(max(car_probs[0]))

        logits_per_image, logits_per_text = model(image, ped_text)
        ped_probs = logits_per_image.softmax(dim=-1).cpu().numpy()
        ped_score = len(pedestrian_space)-list(ped_probs[0]).index(max(ped_probs[0]))

        logits_per_image, logits_per_text = model(image, public_text)
        public_probs = logits_per_image.softmax(dim=-1).cpu().numpy()
        public_score = len(public_transit)-list(public_probs[0]).index(max(public_probs[0]))
    
    car_descriptors = ["with the same number of cars", "with less cars", "with mostly less cars", "with extremely less cars", "with almost no cars"]
    ped_descriptors = ["with the same sidewalk space", "with a little more sidewalk space", "with significantly more sidewalk space"]
    public_descriptors = ["with the same number of bike lanes and public transit vehicles", "with slightly more bike lanes and same number public transit vehicles", "with more bike lanes and public transit vehicles", "with significantly more bike lanes, clean energy vehicles, and public transport"]
    
    response = openai.Image.create(
        prompt="Create a super realistic render of " + place_name + " " + car_descriptors[car_score] + "; " + ped_descriptors[ped_score] + ", " + public_descriptors[public_score],
        n=1,
        size="512x512",
    )

    print(response)

    print("Car score: " + str(car_score))
    print("Ped score: " + str(ped_score))
    print("Transit score: " + str(public_score))

    return car_spectrum[list(car_probs[0]).index(max(car_probs[0]))]

if __name__ == "__main__":
    app.run()