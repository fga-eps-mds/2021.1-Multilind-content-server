from datetime import time
from bs4 import BeautifulSoup
from selenium import webdriver
import os
import time
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import re
import requests
import json

def create_browser():
    chrome_options = webdriver.ChromeOptions()
    #chrome_options.binary_location = os.environ['GOOGLE_CHROME_BIN'] #export GOOGLE_CHROME_BIN='/usr/bin/google-chrome'
    chrome_options.add_argument('--headless')
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--no-sandbox") #bypass OS security model
    chrome_options.add_argument("--disable-dev-shm-usage") #overcome limited resource problems
    #chrome_options.add_argument("--shm-size=1024m")
    
    
    chrome_options.add_experimental_option("prefs", {
      "download.default_directory": os.path.abspath(os.path.curdir)+"/downloads",
      "download.directory_upgrade": True,
      "safebrowsing.enabled": True
    })
    browser = webdriver.Chrome(chrome_options=chrome_options, executable_path=ChromeDriverManager().install())
    
    print("Done Creating Browser")
    return browser


HOST = "https://multilind-content-stagging.herokuapp.com"


#mudar pra http se der problema
main_url = "http://sii.funai.gov.br/funai_sii/index.wsp"
saiba_mais_url = "informacoes_indigenas/visao/visao_povos_indigenas.wsp"
browser = create_browser()
browser.set_window_size(1440,900)
browser.get(main_url)
browser.find_element(By.XPATH, '//a[@href="'+saiba_mais_url+'"]').click()

browser.find_element(By.XPATH, '//area[@mapaimagem="Todos.jpg"]').click()
time.sleep(2)

links = browser.find_elements(By.XPATH, '//td[@title="Clique aqui para obter informações sobre respectiva Etnia"]')
ids_funai = []
for link in links:
    funai_id = re.match(r"povos\((\d+)\);", link.get_attribute('onclick')).group(1)
    ids_funai.append(funai_id)
ids_funai = list(dict.fromkeys(ids_funai))
for funai_id in ids_funai:
    #mudar pra http se der problema
    etnia_url = f"http://sii.funai.gov.br/funai_sii/informacoes_indigenas/visao/povos_indigenas.wsp?tmp.edt.etnia_codigo={funai_id}"
    browser.get(etnia_url)
    time.sleep(1)
    etnia_regex = r"<td>\n+\s+([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s´^~äëïöüÄËÏÖÜ-]+)\n+\s+<\/td>"
    etnia = None
    if(re.search(etnia_regex, browser.page_source)):
        etnia = re.search(etnia_regex, browser.page_source).group(1)
    lingua_familia_tronco_regex = r'<td valign=\"top\">([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ-]+)<\/td>'
    tronco_regex = r"<td><strong>Tronco Linguístico: </strong></td>"
    familia_regex = r"<td><strong>Família Linguística:</strong></td>"
    lingua_regex = r"<td><strong>Língua:</strong></td>"
    lingua_familia_tronco = re.findall(lingua_familia_tronco_regex, browser.page_source)
    print('length: ')
    print(len(lingua_familia_tronco))
    lingua_name = None
    familia_name = None
    tronco_name = None
    try:
        lingua_name = lingua_familia_tronco[0]
        familia_name = lingua_familia_tronco[1]
        tronco_name = lingua_familia_tronco[2]
    except:
        ...
    troncos = requests.get(f"{HOST}/tronco").json()
    tronco_escolhido = tronco_name if not familia_name else familia_name
    id_tronco = None
    id_lingua = None
    if tronco_escolhido:
        for tronco in troncos:
            if(tronco['nome'] == tronco_escolhido):
                id_tronco = tronco['id_tronco']
        if(not id_tronco):
            create_tronco = requests.post(f"{HOST}/tronco", data=json.dumps({'nome': tronco_escolhido}), headers={'content-type': 'application/json'})
            print(create_tronco.text)
            id_tronco = create_tronco.json()['id_tronco']
    print('ID Funai: '+funai_id)
    print('Etnia: ')
    print(etnia)
    if(not etnia):
        print('#######################ETNIA NÃO ENCONTRADA#####################')
    print('Língua: ')
    print(lingua_name)
    if(lingua_name!='Desconhecida'):
        linguas = requests.get(f"{HOST}/lingua").json()
        for lingua in linguas:
            if(lingua['nome'] == lingua_name):
                id_lingua = lingua['id_lingua']
            
        if(not id_lingua):
            create_lingua = requests.post(f"{HOST}/lingua", data=json.dumps({'nome': lingua_name, 'id_tronco': id_tronco}), headers={'content-type': 'application/json'})
            id_lingua = create_lingua.json()['id_lingua']
            print(create_lingua.text)
    create_etnia = requests.post(f"{HOST}/etnia", data=json.dumps({'nome': etnia}), headers={'content-type': 'application/json'})
    print(create_etnia.text)
    try:
        id_etnia = create_etnia.json()['id_etnia']
        if(id_etnia and id_lingua):
            create_dialeto = requests.post(f"{HOST}/dialeto", data=json.dumps({'id_etnia': id_etnia, 'id_lingua': id_lingua}), headers={'content-type': 'application/json'})
            print(create_dialeto.text)
    except:
        ...

            
        
    