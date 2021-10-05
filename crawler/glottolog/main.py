import json
language_json = open('language.json')
family_json = open('family.json')
languages = json.loads(language_json.read())['features']
families = json.loads(family_json.read())['features']

def get_family(families, family_pk):
    if(family_pk!='null'):
        for family in families:
            family_info = family['properties']['language']
            if(int(family_info['pk']) == int(family_pk)):
                return family_info

for language in languages:
    language_info = language['properties']['language']
    language_name = language_info['name']
    language_latitude = language_info['latitude']
    language_longitude = language_info['longitude']
    language_family_pk = language_info['family_pk']
    print(get_family(families, language_family_pk))
