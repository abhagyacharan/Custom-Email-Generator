# backend/app/api/routes.py
import csv
import io
import pandas as pd
from fastapi import APIRouter, UploadFile, Form
from fastapi.responses import JSONResponse
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

router = APIRouter()

# Initialize LLM with Groq API Key
llm = OpenAI(temperature=0.7, openai_api_key="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")

# Helper Function: Parse CSV
def parse_csv(file: UploadFile):
    content = file.file.read().decode("utf-8")
    data = list(csv.DictReader(io.StringIO(content)))
    return data

# Helper Function: Parse Google Sheet
def parse_google_sheet(sheet_url: str):
    import gspread
    from oauth2client.service_account import ServiceAccountCredentials

    # Authenticate Google Sheets API
    scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
    credentials = ServiceAccountCredentials.from_json_keyfile_name("google_creds.json", scope)
    client = gspread.authorize(credentials)

    # Extract spreadsheet and worksheet data
    sheet = client.open_by_url(sheet_url).sheet1
    data = pd.DataFrame(sheet.get_all_records())
    return data.to_dict(orient="records")

# Helper Function: Generate Emails
async def generate_emails(data, prompt_template):
    prompt = PromptTemplate(input_variables=list(data[0].keys()), template=prompt_template)
    llm_chain = LLMChain(llm=llm, prompt=prompt)
    emails = []

    for row in data:
        generated_email = llm_chain.run(**row)
        emails.append({"recipient": row.get("Email"), "content": generated_email})

    return emails

# Endpoint to Handle Uploads and Generation
@router.post("/upload")
async def upload_and_generate(
    file: UploadFile = None, googleSheetUrl: str = Form(None), prompt: str = Form(...)
):
    if not file and not googleSheetUrl:
        return JSONResponse(status_code=400, content={"error": "No data source provided."})

    # Parse the data
    if file:
        data = parse_csv(file)
    elif googleSheetUrl:
        data = parse_google_sheet(googleSheetUrl)

    # Validate data existence
    if not data:
        return JSONResponse(status_code=400, content={"error": "No data parsed from source."})

    # Generate emails using the prompt and data
    emails = await generate_emails(data, prompt)

    return {"emails": emails}
