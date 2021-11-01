from numpy import result_type
import pandas as pd
import requests
import json
HOST = 'http://localhost:8000'
csv = pd.read_csv('../lexibank-huntergatherer/languages.csv')
linguas = requests.get(f'{HOST}/lingua/').json()
for lingua in linguas:
    find = csv.loc[(csv['Name'] == lingua['nome']) | (csv['Glottolog_Name'] == lingua['nome'])].Glottocode
    try:
        glottocode = find.item()
        print(glottocode)
        response = requests.put(f'{HOST}/lingua/{lingua["id_lingua"]}', data=json.dumps({'nome': lingua['nome'], 'glottocode': str(glottocode)}), headers={'content-type': 'application/json'})
        print(response.text)
    except:
        ...