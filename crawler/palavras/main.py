from numpy.core.numeric import NaN
import pandas as pd
import requests
import json

HOST = "https://multilind-content-stagging.herokuapp.com"

csv = pd.read_csv('palavras_anari.csv')
index = list(csv.columns)[1:]
troncos = requests.get(f"{HOST}/tronco").json()
linguas = requests.get(f"{HOST}/lingua").json()
palavras = csv['Palavra em Português']
print(palavras)
for i in index:
    id_lingua = None
    id_tronco = None
    lingua, familia = i.split('/')
    if(len(familia)>0):
        for tronco in troncos:
            if(tronco['nome'] == familia):
                id_tronco = tronco['id_tronco']
        if(not id_tronco):
            create_tronco = requests.post(f"{HOST}/tronco", data=json.dumps({'nome': familia}), headers={'content-type': 'application/json'})
            id_tronco = create_tronco.json()['id_tronco']
    for l in linguas:
        if l['nome'] == lingua:
            id_lingua = l['id_lingua']
    if(not id_lingua):
        create_lingua = requests.post(f"{HOST}/lingua", data=json.dumps({'nome': lingua, 'id_tronco': id_tronco}), headers={'content-type': 'application/json'}).json()
        id_lingua = create_lingua['id_lingua']
    row = 0
    for palavra in palavras:
        all_palavras = palavra.split(', ')
        print(all_palavras)
        for palavra in all_palavras:
            if(type(palavra)==str and type(csv[i][row])==str):
                palavra_response = requests.post(f"{HOST}/palavra/{id_lingua}", data=json.dumps({'nome': csv[i][row].lower().strip(), 'significado': palavra.lower().strip()}), headers={'content-type': 'application/json'})
                print(palavra_response.text)
        row+=1