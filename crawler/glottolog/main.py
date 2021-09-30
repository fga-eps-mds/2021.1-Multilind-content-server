import json
json_file = open('geojson.json')
geojson = json.loads(json_file.read())
for feature in geojson['features']:
    lingua = feature['properties']['name']
    posicao = feature['geometry']['coordinates']
    print('LINGUA: '+lingua)
    print('POSICAO GEOGRAFICA: '+str(posicao[0])+' '+str(posicao[1]))