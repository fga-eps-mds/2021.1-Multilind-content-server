import json
import requests
language_json = open('brasil.json')
languages = json.loads(language_json.read())['features']
print(len(languages))
HOST = "http://localhost:8000"
for language in languages:
    language_info = language['properties']['language']
    language_name = language_info['name']
    language_latitude = language_info['latitude']
    language_longitude = language_info['longitude']
    language_family_pk = language_info['family_pk']
    language_id = language_info['id']
    print(f'Língua: {language_name}')
    print(f'Posição Geográfica: {language_latitude} {language_longitude}')
    family_name = None
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
                family_name = family_details['name']
                print(f"Tronco: {family_details['name']}")
    id_tronco = None
    id_localidade = None
    if(family_name and family_name!="Unattested"):
        troncos = requests.get(f"{HOST}/tronco").json()
        for tronco in troncos:
            if(tronco['nome'] == family_name):
                id_tronco = tronco['id_tronco']
        if(not id_tronco):
            create_tronco = requests.post(f"{HOST}/tronco", data=json.dumps({'nome': family_name}), headers={'content-type': 'application/json'})
            id_tronco = create_tronco.json()['id_tronco']
    if(language_latitude and language_longitude):
        localidades = requests.get(f"{HOST}/localidade").json()
        for localidade in localidades:
            if(localidade['latitude'] == language_latitude and localidade['longitude'] == language_longitude):
                id_localidade = localidade['id_localidade']
        if(not id_localidade):
            create_localidade = requests.post(f"{HOST}/localidade", data=json.dumps({'latitude': language_latitude, 'longitude': language_longitude}), headers={'content-type': 'application/json'})
            id_localidade = create_localidade.json()['id_localidade']
    create_lingua = requests.post(f"{HOST}/lingua", data=json.dumps({'nome': language_name, 'id_tronco': id_tronco}), headers={'content-type': 'application/json'}).json()
    create_idioma = requests.post(f"{HOST}/idioma", data=json.dumps({'id_localidade': id_localidade, 'id_lingua': create_lingua['id_lingua']}), headers={'content-type': 'application/json'})
    print(create_idioma.text)

