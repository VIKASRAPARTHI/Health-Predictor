from fastapi import FastAPI, HTTPException, Header
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware



import requests  # To call an external API

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow requests from any frontend (change this in production)
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Explicitly allow OPTIONS
    allow_headers=["*"],  # Allow all headers
)

# Replace this with your actual API key
API_KEY = "https://nexus-heg8.onrender.com"

# Define request model
class HealthData(BaseModel):
    age: int
    bmi: float
    smoking: str
    alcoholConsumption: str
    physicalActivity: int
    dietType: str
    sleepHours: int
    stressLevel: str
    bloodPressure: str
    cholesterol: str
    familyHistory: str
    bloodSugar: str
    waistCircumference: int

# API Endpoint
@app.post("/predict")
async def predict(health_data: HealthData, x_api_key: str = Header(None)):
    if x_api_key != API_KEY:
        raise HTTPException(status_code=403, detail="Invalid API Key")

    # Replace with the actual API you want to call
    external_api_url = "https://your-external-health-api.com/predict"
    
    response = requests.post(
        external_api_url,
        json=health_data.dict(),
        headers={"Authorization": f"Bearer {API_KEY}"}
    )

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="External API error")

    return response.json()
