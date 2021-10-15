from datetime import time
from bs4 import BeautifulSoup
from selenium import webdriver
import os
import time
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import re

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
#mudar pra http se der problema
main_url = "https://sii.funai.gov.br/funai_sii/index.wsp"
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

for funai_id in ids_funai:
    #mudar pra http se der problema
    etnia_url = f"https://sii.funai.gov.br/funai_sii/informacoes_indigenas/visao/povos_indigenas.wsp?tmp.edt.etnia_codigo={funai_id}"
    browser.get(etnia_url)
    browser.save_screenshot(f'print{funai_id}.png')
    time.sleep(1)
    print(browser.page_source)