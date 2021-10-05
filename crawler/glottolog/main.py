import json
language_json = open('language.json')
family_json = open('family.json')
languages = json.loads(language_json.read())['features']
families = json.loads(family_json.read())['features']

def get_family(families, family_pk):
    if(family_pk!='null' and family_pk):
        for family in families:
            family_info = family['properties']['language']
            if(int(family_info['pk']) == int(family_pk)):
                print(family_info)
                return family_info
def get_family_by_newick(families, id):
    for family in families:
        family_info = family['properties']['language']
        print(family_info['newick'])
        if(f"[{str(id)}]" in family_info['newick']):
            print(family_info)
            return family_info
for language in languages:
    language_info = language['properties']['language']
    language_name = language_info['name']
    language_latitude = language_info['latitude']
    language_longitude = language_info['longitude']
    language_family_pk = language_info['family_pk']
    if(language_family_pk):
        get_family_by_newick(families, language_family_pk)
