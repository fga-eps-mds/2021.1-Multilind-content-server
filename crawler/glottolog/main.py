import json
import requests
language_json = open('brasil.json')
languages = json.loads(language_json.read())['features']
print(len(languages))
for language in languages:
    language_info = language['properties']['language']
    language_name = language_info['name']
    language_latitude = language_info['latitude']
    language_longitude = language_info['longitude']
    language_family_pk = language_info['family_pk']
    language_id = language_info['id']
    print(f'Língua: {language_name}')
    print(f'Posição Geográfica: {language_latitude} {language_longitude}')
    if(language_family_pk):
        language_details_url = f"https://glottolog.org/resource/languoid/id/{language_id}.json"
        language_response = requests.get(language_details_url)
        language_details = language_response.json()
        classifications = language_details['classification']
        for classification in classifications:
            family_url = f"https://glottolog.org/resource/languoid/id/{classification['id']}.json"
            family_response = requests.get(family_url)
            family_details = family_response.json()
            if(family_details['pk'] == language_family_pk):
                print(f"Tronco: {family_details['name']}")
