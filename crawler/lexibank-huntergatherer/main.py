import requests
import shutil
import os.path as path
import pandas as pd
import json

if(not path.exists("huntergatherer-master")):
    download_url = "https://github.com/lexibank/huntergatherer/archive/refs/heads/master.zip"
    filename = 'master.zip'
    response = requests.get(download_url)
    open(filename, 'wb').write(response.content)
    shutil.unpack_archive(filename, './')
languages_dir = 'languages.csv'
linguas = requests.get('http://localhost:8000/lingua').json()
languages_csv = pd.read_csv(languages_dir, delimiter=',')
jsons_dir = "huntergatherer-master/raw/"
for lingua in linguas:
    found = languages_csv[languages_csv.Glottolog_Name == lingua['nome']]
    if(not found.empty):
        json_id = pd.to_numeric(found['ID']).values[0]
        json_path = f"{jsons_dir}{json_id}.json"
        print(json_path)
        json_file = json.loads(open(json_path).read())
        keys = list(json_file['tables'].keys())
        to_remove = ['grammar', 'ethno']
        for remove in to_remove:  
            keys.remove(remove) if remove in keys else keys
        tables = json_file['tables']
        for key in keys:
            palavras = tables[key]
            significado_index = palavras['header'].index('Portuguese')
            palavra_index = palavras['header'].index('Orthographic Form')
            for row in palavras['rows']:
                if(len(row[significado_index].replace(" ", "")) > 0 and len(row[palavra_index].replace(" ", "")) > 0):
                    split_palavras = row[significado_index].lower().split(', ')
                    print(split_palavras)
                    for split in split_palavras:
                        palavra_response = requests.post(f"http://localhost:8000/palavra/{lingua['id_lingua']}", data=json.dumps({'nome': row[palavra_index].lower(), 'significado': split.strip()}), headers={'content-type': 'application/json'})
                        print(palavra_response.text)
    